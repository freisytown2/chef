import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '2mb' }));

// Simple in-memory rate limiter per IP (max 100 calls per minute)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }
  if (entry.count >= 100) {
    return false;
  }
  entry.count++;
  return true;
};

// Health and AI status check endpoint
app.get('/api/status', (req: Request, res: Response) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
  res.json({
    status: 'ok',
    aiAvailable: hasKey,
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Chef IA chat endpoint
app.post('/api/chef-ia', async (req: Request, res: Response) => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(clientIp)) {
    res.status(429).json({
      error: 'Demasiadas solicitudes. Por favor, espera un momento antes de volver a consultar a Chef IA.'
    });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    res.status(503).json({
      error: 'Chef IA no está configurado con una clave de API activa en el servidor. Consulta las opciones locales en la pestaña de ayuda.',
      offlineFallback: true
    });
    return;
  }

  const { message, history, language = 'es', contextRecipe } = req.body;

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'El mensaje es requerido.' });
    return;
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const systemInstruction = `
Eres Chef Saborino, el asistente culinario oficial de SaborChef. Eres un chef profesional, cálido, pedagógico y entusiasta con amplia experiencia en gastronomía internacional, técnicas de cocina casera y alta cocina.

REGLAS ESTRICTAS DE COMUNICACIÓN Y FORMATO:
1. NUNCA uses símbolos de Markdown para dar formato:
   - NO uses asteriscos (*) para negrita o cursiva.
   - NO uses almohadillas (#) para títulos o encabezados.
   - NO uses bloques de código con comillas triples (\`\`\`).
   - NO uses guiones largos ni viñetas raras.
2. Escribe en texto limpio, fluido y fácil de leer en cualquier pantalla o voz sintética.
3. Para estructurar recetas o explicaciones, usa títulos simples en mayúsculas o minúsculas en su propia línea, por ejemplo:
   Ingredientes:
   Preparación:
   Consejos:
4. Para pasos de preparación, usa listas numeradas simples como:
   1. Primer paso...
   2. Segundo paso...
5. Conserva siempre los números, unidades de medida y temperaturas necesarias (como 200 g, 1 taza, 180 °C).
6. Responde SIEMPRE en el idioma solicitado: ${language}. Si el usuario escribe en otro idioma, adáptate de forma natural.
7. ÁMBITO: Responde únicamente sobre cocina, recetas, alimentos, técnicas culinarias, menús, maridajes, conservación y nutrición básica casera. Si te preguntan sobre otros temas (política, matemáticas, programación, etc.), redirige la conversación con humor y calidez hacia la comida.
8. SEGURIDAD ALIMENTARIA Y ALÉRGENOS:
   - Nunca garantices ausencia absoluta de alérgenos por contaminación cruzada.
   - No des diagnósticos médicos ni promesas de curación o pérdida de peso rápida.
   - En temas de carne cruda, mariscos o conservación, sé prudente y riguroso.
9. PROPUESTAS DE RECETAS: Si propones una receta nueva que no esté en el catálogo, indícalo con naturalidad para que el usuario sepa que puede guardarla como receta personal.
${contextRecipe ? `CONTEXTO DE LA RECETA ACTUALMENTE CONSULTADA: ${JSON.stringify(contextRecipe)}` : ''}
`;

    // Build chat contents from history ensuring valid Gemini turn alternation (starts with 'user', alternates roles)
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      const recentHistory = history.slice(-8);
      for (const turn of recentHistory) {
        if (turn.role === 'user' || turn.role === 'model') {
          // Gemini conversations must start with 'user'
          if (contents.length === 0 && turn.role !== 'user') {
            continue;
          }
          // Avoid consecutive identical roles
          if (contents.length > 0 && contents[contents.length - 1].role === turn.role) {
            continue;
          }
          contents.push({
            role: turn.role,
            parts: [{ text: String(turn.text || turn.content || '') }]
          });
        }
      }
    }

    // Ensure the last item before adding our message isn't already 'user'
    if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
      contents.pop();
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Try reliable models with automatic fallback
    const modelsToTry = ['gemini-flash-latest', 'gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let rawText = '';
    let lastErr: any = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
          }
        });
        if (response.text) {
          rawText = response.text;
          break;
        }
      } catch (err: any) {
        lastErr = err;
        console.warn(`Model ${modelName} encountered issue: ${err.message}. Trying next fallback model...`);
      }
    }

    if (!rawText) {
      throw lastErr || new Error('No se pudo obtener respuesta del modelo');
    }

    // Post-process to ensure ABSOLUTELY NO markdown asterisks, hashes, backticks slip through
    const cleanedText = rawText
      .replace(/\*\*(.*?)\*\*/g, '$1') // remove bold asterisks
      .replace(/\*(.*?)\*/g, '$1')     // remove italic asterisks
      .replace(/#{1,6}\s+/g, '')       // remove markdown headers
      .replace(/```[\s\S]*?```/g, (match) => match.replace(/```/g, '')) // remove code blocks
      .replace(/`([^`]+)`/g, '$1')     // remove inline code
      .trim();

    res.json({
      text: cleanedText,
      language
    });
  } catch (error: any) {
    console.error('Error in Chef IA endpoint:', error);
    res.status(500).json({
      error: 'No se pudo conectar con el servicio de Chef IA en este momento. Verifica tu conexión a internet o utiliza el recetario local.',
      details: error.message || 'Error desconocido'
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`SaborChef server running on port ${PORT}`);
  });
}

startServer();
