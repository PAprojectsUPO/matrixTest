
import json
import os

source_file = 'questions.json'
output_dir = 'data'

with open(source_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

modules = data.get('quizModules', [])
modules_manifest = []

for module in modules:
    mod_id = module.get('id')
    # Create a nice filename
    filename = f"questions_{mod_id}.json"
    file_path = os.path.join(output_dir, filename)
    
    # Save the full module data to its own file
    with open(file_path, 'w', encoding='utf-8') as f_out:
        json.dump(module, f_out, ensure_ascii=False, indent=2)
    
    # Add to manifest (lightweight version)
    modules_manifest.append({
        "id": mod_id,
        "name": module.get('name'),
        "description": module.get('description'),
        "file": f"./data/{filename}"
    })

# Save manifest
manifest_path = os.path.join(output_dir, 'modules.json')
with open(manifest_path, 'w', encoding='utf-8') as f_man:
    json.dump(modules_manifest, f_man, ensure_ascii=False, indent=2)

print(f"Split {len(modules)} modules into '{output_dir}/' and created 'modules.json'.")
