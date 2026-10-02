#!/usr/bin/env python3
import json
import os
import sys

# Ensure scripts dir is in path
sys.path.append(os.path.dirname(__file__))

from batches import (
    batch1, batch2, batch3, batch4, batch5,
    batch6, batch7, batch8, batch9, batch10, batch11
)

CATEGORIES = [
    'familiares', 'saludables', 'desayunos', 'almuerzos', 'cenas',
    'navidad', 'fin-de-ano', 'rapidas', 'economicas', 'vegetarianas',
    'veganas', 'carnes-pollo', 'pescados-mariscos', 'arroces-pastas',
    'sopas-cremas', 'ensaladas', 'postres', 'bebidas',
    'aperitivos-fiestas', 'internacional'
]

raw_recipes = []

def add(title, desc, country, portions, prep, cook, diff, cats, tags, allergens, cals, prot, carbs, fat, emoji, color, ings, steps, step_times, tips, subs):
    raw_recipes.append({
        'name': title,
        'description': desc,
        'country': country,
        'portions': portions,
        'prepTime': prep,
        'cookTime': cook,
        'totalTime': prep + cook,
        'difficulty': diff,
        'categories': cats,
        'tags': tags,
        'allergens': allergens,
        'nutrition': {
            'calories': cals,
            'protein': prot,
            'carbs': carbs,
            'fat': fat,
            'isEstimated': True,
            'method': 'Estimación nutricional aproximada basada en ingredientes estándar del catálogo'
        },
        'emoji': emoji,
        'color': color,
        'ingredients': [
            {
                'id': f"ing-{idx+1}",
                'name': ing[0],
                'amount': ing[1],
                'unit': ing[2],
                'category': ing[3] if len(ing) > 3 else 'despensa'
            }
            for idx, ing in enumerate(ings)
        ],
        'instructions': [
            {
                'stepNumber': idx + 1,
                'instruction': step,
                'durationMinutes': step_times[idx] if idx < len(step_times) else None
            }
            for idx, step in enumerate(steps)
        ],
        'tips': tips,
        'substitutions': subs
    })

# Load all 11 batches
all_batches = [
    batch1, batch2, batch3, batch4, batch5,
    batch6, batch7, batch8, batch9, batch10, batch11
]

for idx, b in enumerate(all_batches, 1):
    func_name = f"load_batch{idx}"
    if hasattr(b, func_name):
        getattr(b, func_name)(add)
    else:
        print(f"Warning: {func_name} not found in batch {idx}")

print(f"Loaded {len(raw_recipes)} total recipes.")

# Assign unique IDs
final_recipes = []
seen_names = set()
for i, r in enumerate(raw_recipes, 1):
    name = r['name']
    if name in seen_names:
        print(f"Warning duplicate title: {name}")
    seen_names.add(name)
    r['id'] = f"rec-{i:03d}"
    final_recipes.append(r)

# Verify category counts
cat_counts = {c: 0 for c in CATEGORIES}
for r in final_recipes:
    for c in r['categories']:
        if c in cat_counts:
            cat_counts[c] += 1
        else:
            print(f"Unknown category '{c}' in recipe {r['id']}")

print("--- CATEGORY COUNTS ---")
below_12 = []
for c, count in cat_counts.items():
    print(f"{c:20}: {count}")
    if count < 12:
        below_12.append((c, count))

if below_12:
    print(f"ERROR: Categories with less than 12 recipes: {below_12}")
    sys.exit(1)

if len(final_recipes) < 300:
    print(f"ERROR: Total recipes is {len(final_recipes)}, requires at least 300!")
    sys.exit(1)

out_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'recipes')
os.makedirs(out_dir, exist_ok=True)
out_file = os.path.join(out_dir, 'catalog.json')

with open(out_file, 'w', encoding='utf-8') as f:
    json.dump(final_recipes, f, ensure_ascii=False, indent=2)

print(f"\nSUCCESS! Catalog generated at {out_file}")
print(f"Total Unique Recipes: {len(final_recipes)}")
print(f"All 20 categories have >= 12 recipes!")
