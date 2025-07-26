#Dictionaries
#Syntax 
# {'key' : value, 'key': value}

dict_constructor = {'name':'juliana', 
                    'age': 35, 
                    'pets': ['Caramelo', 'Pipoca']}

student_info = {
    'first_name': 'Harry',
    'last_name': 'Potter',
    'age': 14,
    'address' : 'Privet Drive, 4',
    'pets': ['Hedwig', 'Buckbeak'],
    'houses': {'main': 'Griffyndor', 'second': 'Slytherin'},
    'best_friends': ('Ron Weasley', 'Hermione Granger')
}

#ACCESSING DATA
print(student_info['pets'])
print(student_info['pets'][1])

#using methods on the values
student_info['pets'].append('Fenix')
print(student_info['pets'])
print(student_info['first_name'].upper())

#Changing values
student_info['address'] = 'Hogwarts'
print(student_info)

#deleting a key
del student_info['age']
print(student_info)

#creating key value pair 
student_info['teachers'] = {'Dumbleadore', 'Snap', 'McGonagal'}
# print(student_info)

#exercise 1

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

# print(sample_dict["class"]['student']['marks']['history'])


#Loops and built-in methods for dictionaries

#keys()
for k in student_info.keys():
    print(k)

#values()
for v in student_info.values():
    print(v)

# items()
for key, value in student_info.items():
    print(key, value)

#update() method
student_info.update({'patronum': 'stag'})
print(student_info)


keys_to_remove = ["name", "salary"]

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

for key in keys_to_remove:
    if key in sample_dict:
        del sample_dict[key]

print(sample_dict)

print(sample_dict.keys())


#other useful built-in function: zip()

names = ['Juliana', 'Yosef', 'Sonia']
addresses = ['Ramat Gan', 'Jerusalem', 'Tel Aviv']

print(list(zip(names, addresses)))

topics = ('Math', 'Grammar', 'History', 'Sport')
grades = [85, 90, 100]

#if the length of the lists are not the same, what is over will be ignored

print(dict(zip(topics, grades)))
