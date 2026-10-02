#!/usr/bin/env python3
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

all_recipes = []
seen_names = set()
rec_counter = 1

def add(name, desc, country, servings, prep, cook, diff, cats, tags, allergens, cal, prot, carb, fat, emoji, color, ings, steps, step_times, tips, subs):
    global rec_counter
    norm = name.strip().lower()
    if norm in seen_names:
        return
    seen_names.add(norm)

    # validate categories
    for c in cats:
        if c not in CATEGORIES:
            raise ValueError(f"Unknown category '{c}' in recipe {name}")

    rid = f"rec-{rec_counter:03d}"
    rec_counter += 1

    formatted_ings = []
    for idx, item in enumerate(ings):
        formatted_ings.append({
            "id": f"{rid}-i{idx+1}",
            "name": item[0],
            "amount": item[1],
            "unit": item[2],
            "category": item[3]
        })

    all_recipes.append({
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
        "stepTimes": step_times if step_times else [cook],
        "tips": tips if tips else ["Cocina con ingredientes frescos para el mejor resultado."],
        "substitutions": subs if subs else ["Adapta las especias según tu gusto personal."]
    })

print("Catalog builder loaded.")
