# SaborChef Recipe Catalog Builder
import json
import os

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
recipe_counter = 1

def r(name, desc, country, servings, prep, cook, diff, cats, tags, allergens, cal, prot, carb, fat, emoji, color, ings, steps, step_times, tips, subs):
    global recipe_counter
    norm = name.strip().lower()
    if norm in seen_names:
        return
    seen_names.add(norm)
    rid = f"rec-{recipe_counter:03d}"
    recipe_counter += 1

    formatted_ings = []
    for idx, item in enumerate(ings):
        formatted_ings.append({
            "id": f"{rid}-i{idx+1}",
            "name": item[0],
            "amount": item[1],
            "unit": item[2],
            "category": item[3]
        })

    recipe = {
        "id": rid,
        "name": name.strip(),
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
        "stepTimes": step_times,
        "tips": tips,
        "substitutions": subs
    }
    recipes.append(recipe)

print("Builder ready.")
