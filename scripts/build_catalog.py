import json
import os
import sys

CATEGORIES = [
    'familiares',
    'saludables',
    'desayunos',
    'almuerzos',
    'cenas',
    'navidad',
    'fin-de-ano',
    'rapidas',
    'economicas',
    'vegetarianas',
    'veganas',
    'carnes-pollo',
    'pescados-mariscos',
    'arroces-pastas',
    'sopas-cremas',
    'ensaladas',
    'postres',
    'bebidas',
    'aperitivos-fiestas',
    'internacional'
]

recipes = []
seen_names = set()
recipe_id = 1

def add(name, desc, country, servings, prep, cook, diff, cats, tags, allergens, cal, prot, carb, fat, emoji, color, ing_list, steps, step_times, tips, subs):
    global recipe_id
    clean_name = name.strip()
    norm = clean_name.lower()
    if norm in seen_names:
        print(f"WARNING: duplicate name {name}")
        return
    seen_names.add(norm)
    
    # validate cats
    for c in cats:
        if c not in CATEGORIES:
            raise ValueError(f"Invalid category '{c}' in {name}")
            
    rid = f"rec-{recipe_id:03d}"
    recipe_id += 1
    
    formatted_ings = []
    for idx, item in enumerate(ing_list):
        formatted_ings.append({
            "id": f"{rid}-i{idx+1}",
            "name": item[0],
            "amount": item[1],
            "unit": item[2],
            "category": item[3]
        })
        
    recipe = {
        "id": rid,
        "name": clean_name,
        "description": desc.strip(),
        "country": country.strip(),
        "servings": servings,
        "prepTime": prep,
        "cookTime": cook,
        "totalTime": prep + cook,
        "difficulty": diff,
        "categories": cats,
        "tags": tags,
        "allergens": allergens,
        "nutrition": {
            "calories": cal,
            "protein": prot,
            "carbs": carb,
            "fat": fat,
            "method": "Estimación calculada a partir de los ingredientes base por ración estándar según tablas nutricionales oficiales. Puede variar según marcas y método de cocción."
        },
        "emoji": emoji,
        "color": color,
        "ingredients": formatted_ings,
        "steps": steps,
        "stepTimes": step_times if step_times else [cook],
        "tips": tips if tips else ["Cocina con ingredientes frescos a temperatura ambiente para potenciar los sabores."],
        "substitutions": subs if subs else ["Puedes ajustar las especias según tu gusto personal."]
    }
    recipes.append(recipe)

# Now we will define the rich list of dishes.
