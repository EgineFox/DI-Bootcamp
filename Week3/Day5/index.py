import json

json_file = 'file.json'
with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)

print(family)