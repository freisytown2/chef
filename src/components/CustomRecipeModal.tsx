import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Recipe, DifficultyLevel } from '../types/recipe';
import { CATEGORIES } from '../data/categories';
import { X, Plus, Trash2, Save, ChefHat } from 'lucide-react';

interface CustomRecipeModalProps {
  onClose: () => void;
  initialRecipe?: Recipe | null;
}

export const CustomRecipeModal: React.FC<CustomRecipeModalProps> = ({
  onClose,
  initialRecipe,
}) => {
  const { saveCustomRecipe } = useApp();

  const [name, setName] = useState(initialRecipe?.name || '');
  const [description, setDescription] = useState(initialRecipe?.description || '');
  const [country, setCountry] = useState(initialRecipe?.country || 'Mi Cocina');
  const [portions, setPortions] = useState(initialRecipe?.portions || initialRecipe?.servings || 4);
  const [prepTime, setPrepTime] = useState(initialRecipe?.prepTime || 15);
  const [cookTime, setCookTime] = useState(initialRecipe?.cookTime || 20);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(initialRecipe?.difficulty || 'Fácil');
  const [selectedCats, setSelectedCats] = useState<string[]>(
    initialRecipe?.categories && initialRecipe.categories.length > 0
      ? initialRecipe.categories
      : ['familiares']
  );

  const [ingredients, setIngredients] = useState<
    Array<{ id: string; name: string; amount: number; unit: string }>
  >(
    initialRecipe?.ingredients && initialRecipe.ingredients.length > 0
      ? initialRecipe.ingredients.map(i => ({
          id: i.id,
          name: i.name,
          amount: i.amount,
          unit: i.unit,
        }))
      : [
          { id: '1', name: '', amount: 1, unit: 'unidad' },
          { id: '2', name: '', amount: 100, unit: 'g' },
        ]
  );

  const [steps, setSteps] = useState<string[]>(
    initialRecipe?.steps && initialRecipe.steps.length > 0
      ? initialRecipe.steps
      : ['', '']
  );

  const [tips, setTips] = useState<string>(
    initialRecipe?.tips ? initialRecipe.tips.join('\n') : ''
  );

  const handleAddIngredient = () => {
    setIngredients(prev => [
      ...prev,
      { id: Date.now().toString(), name: '', amount: 1, unit: 'unidad' },
    ]);
  };

  const handleRemoveIngredient = (idx: number) => {
    setIngredients(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateIngredient = (idx: number, field: string, val: any) => {
    setIngredients(prev => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const handleAddStep = () => {
    setSteps(prev => [...prev, '']);
  };

  const handleRemoveStep = (idx: number) => {
    setSteps(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUpdateStep = (idx: number, val: string) => {
    setSteps(prev => {
      const copy = [...prev];
      copy[idx] = val;
      return copy;
    });
  };

  const toggleCategory = (catId: string) => {
    setSelectedCats(prev =>
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor introduce un nombre para la receta.');
      return;
    }

    const validIngredients = ingredients
      .filter(i => i.name.trim().length > 0)
      .map((i, idx) => ({
        id: `ing-custom-${idx + 1}`,
        name: i.name.trim(),
        amount: Number(i.amount) || 1,
        unit: i.unit || 'unidad',
        category: 'despensa' as const,
      }));

    const validSteps = steps.filter(s => s.trim().length > 0);

    const newRecipe: Recipe = {
      id: initialRecipe?.id || `custom-${Date.now()}`,
      name: name.trim(),
      description: description.trim() || 'Receta casera personalizada guardada en SaborChef.',
      country: country.trim() || 'Casero',
      servings: Number(portions) || 4,
      portions: Number(portions) || 4,
      prepTime: Number(prepTime) || 15,
      cookTime: Number(cookTime) || 15,
      totalTime: (Number(prepTime) || 15) + (Number(cookTime) || 15),
      difficulty,
      categories: selectedCats.length > 0 ? selectedCats : ['familiares'],
      tags: ['casera', 'personal', name.toLowerCase().split(' ')[0]],
      allergens: [],
      nutrition: {
        calories: 320,
        protein: 15,
        carbs: 35,
        fat: 12,
        isEstimated: true,
        method: 'Estimación orientativa para receta casera',
      },
      emoji: '👨‍🍳',
      color: '#f97316',
      isCustom: true,
      createdAt: initialRecipe?.createdAt || new Date().toISOString(),
      ingredients: validIngredients,
      steps: validSteps,
      stepTimes: validSteps.map(() => 0),
      tips: tips.split('\n').filter(t => t.trim().length > 0),
      substitutions: [],
    };

    saveCustomRecipe(newRecipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden my-auto border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-extrabold text-base sm:text-lg">
                {initialRecipe ? 'Editar Receta Personal' : 'Crear Receta Personal'}
              </h2>
              <p className="text-xs text-orange-100">Guarda tus secretos culinarios en tu dispositivo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 text-sm text-neutral-800 dark:text-neutral-200">
          {/* Recipe Name */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
              Nombre de la receta *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ej. Arroz meloso de la abuela con verduras"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
              Descripción breve
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Breve reseña sobre el plato o sus ocasiones especiales..."
              className="w-full px-3.5 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-500 mb-1">País / Origen</label>
              <input
                type="text"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-500 mb-1">Porciones</label>
              <input
                type="number"
                min={1}
                max={30}
                value={portions}
                onChange={e => setPortions(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-500 mb-1">Prep (min)</label>
              <input
                type="number"
                min={1}
                value={prepTime}
                onChange={e => setPrepTime(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-500 mb-1">Cocción (min)</label>
              <input
                type="number"
                min={0}
                value={cookTime}
                onChange={e => setCookTime(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-semibold"
              />
            </div>
          </div>

          {/* Difficulty & Categories */}
          <div>
            <label className="block text-xs font-bold text-neutral-500 mb-1">Dificultad</label>
            <div className="flex gap-2">
              {(['Fácil', 'Media', 'Difícil'] as DifficultyLevel[]).map(d => (
                <button
                  type="button"
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`flex-1 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    difficulty === d
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Categories picker */}
          <div>
            <label className="block text-xs font-bold text-neutral-500 mb-1.5">
              Categorías ({selectedCats.length} seleccionadas)
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto p-1 bg-neutral-50 dark:bg-neutral-800/40 rounded-xl border border-neutral-200 dark:border-neutral-700">
              {CATEGORIES.map(cat => {
                const isSelected = selectedCats.includes(cat.id);
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-all ${
                      isSelected
                        ? 'bg-orange-600 text-white font-bold'
                        : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-600'
                    }`}
                  >
                    {cat.emoji} {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ingredients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Ingredientes
              </label>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="text-xs text-orange-600 dark:text-orange-400 font-bold flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir ingrediente</span>
              </button>
            </div>

            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <div key={ing.id} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Nombre del ingrediente"
                    value={ing.name}
                    onChange={e => handleUpdateIngredient(idx, 'name', e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 font-medium text-xs sm:text-sm"
                  />
                  <input
                    type="number"
                    step="any"
                    value={ing.amount}
                    onChange={e => handleUpdateIngredient(idx, 'amount', e.target.value)}
                    className="w-16 px-2 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-center font-bold text-xs"
                  />
                  <input
                    type="text"
                    value={ing.unit}
                    placeholder="Unidad (g, ml, pizca...)"
                    onChange={e => handleUpdateIngredient(idx, 'unit', e.target.value)}
                    className="w-20 px-2 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(idx)}
                    className="text-neutral-400 hover:text-rose-500 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase">
                Pasos de preparación
              </label>
              <button
                type="button"
                onClick={handleAddStep}
                className="text-xs text-orange-600 dark:text-orange-400 font-bold flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir paso</span>
              </button>
            </div>

            <div className="space-y-2">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <span className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1.5">
                    {idx + 1}
                  </span>
                  <textarea
                    rows={2}
                    value={step}
                    placeholder={`Describe el paso ${idx + 1}...`}
                    onChange={e => handleUpdateStep(idx, e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStep(idx)}
                    className="text-neutral-400 hover:text-rose-500 p-1 mt-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <label className="block text-xs font-bold text-neutral-500 mb-1">
              Consejos útiles (un consejo por línea)
            </label>
            <textarea
              rows={2}
              value={tips}
              onChange={e => setTips(e.target.value)}
              placeholder="Ej: Cocina a fuego lento para concentrar los jugos..."
              className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs"
            />
          </div>

          {/* Submit */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Receta en mi Dispositivo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
