# # Exercise
# sample_dict = { 
#     "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]["student"]["marks"]["history"])

# Exercise2
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:  # Iterate through the keys of the dictionary
    if key in sample_dict:  # Check if the key exists in the dictionary
        del sample_dict[key]
print(sample_dict)  # Print the modified dictionary after removing specified keys