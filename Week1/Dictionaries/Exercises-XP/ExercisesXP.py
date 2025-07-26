# Exercise 1: Converting Lists into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
# Using dictionary comprehension to create a dictionary from two lists
new_dict = zip(keys, values)
print(dict(new_dict))

Exercise 2: Cinemax #2
create a dictionary with family members and their ages
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
create a variable to hold the total cost
total_cost = 0
cheking the age of each family member and calculating the total cost
for age in family.values():
    if age < 3:
        total_cost += 0
        print(f"Infant ticket for age {age}: $0")
    elif age < 12:
        total_cost += 10
        print(f"Child ticket for age {age}: $10")
    else:
        total_cost += 15
        print(f"Adult ticket for age {age}: $15")
Printing the total cost
print(f"Total cost for the family: ${total_cost}")

# Bonus
# Prompt the user to enter family members and their ages
family = input("Enter family members and their ages (e.g., 'rick:43,beth:13,morty:5,summer:8'): ")
# create a variable to hold the total cost
total_cost = 0
# Check if the input is in the correct format
if True:
    family = {member.split(':')[0]: int(member.split(':')[1]) for member in family.split(',')}
else:
    print("Invalid input format. Please use 'name:age' pairs separated by commas.")
for age in family.values():
    if age < 3:
        total_cost += 0
        print(f"Infant ticket for age {age}: $0")
    elif age < 12:
        total_cost += 10
        print(f"Child ticket for age {age}: $10")
    else:
        total_cost += 15
        print(f"Adult ticket for age {age}: $15")
# Printing the total cost
print(f"Total cost for the family: ${total_cost}")

# Exercise 3: Zara
brand = {
    'name': 'Zara', 
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': {'men', 'women', 'children', 'home'},
    'international_competitors': {'Gap', 'H&M', 'Benetton'},
    'number_stores': 7000,
    'major_color': {
        'France':'blue',
        'Spain': 'red',
        'US': ['pink', 'green']
        }
}
# Change the value of number_stores to 2.
brand['number_stores'] = 2
# Print a sentence describing Zara’s clients using the type_of_clothes key.
print(f"Zara's clients include {', '.join(brand['type_of_clothes'])}.")
# Add a new key country_creation with the value Spain.
brand['country_creation'] = 'Spain'
# Check if international_competitors exists and, if so, add “Desigual” to the list.
if 'international_competitors' in brand:
    brand['international_competitors'].add('Desigual')
# Delete the creation_date key.
del brand['creation_date']
# Print the last item in international_competitors.
print(f"Last international competitor: {list(brand['international_competitors'])[-1]}")
# Print the major colors in the US.
print(f"Major colors in the US: {', '.join(brand['major_color']['US'])}")
# Print the number of keys in the dictionary.
print(f"Number of keys in the brand dictionary: {len(brand)}")
# Print all keys of the dictionary.
print("Keys in the brand dictionary:")
for key in brand.keys():
    print(key)

# Bonus:
# Create another dictionary called more_on_zara with creation_date and number_stores. Merge this dictionary with the original brand dictionary and print the result.
more_on_zara = {
    'creation_date': 1975,
    'number_stores': 7000
}   
brand.update(more_on_zara)
print("Updated brand dictionary after merging with more_on_zara:")
print(brand)

# Exercise 4: Disney Characters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
# 1. Create a dictionary that maps characters to their indices:
characters_dict = {user: index for index, user in enumerate(users)}
# Print the dictionary
print("Characters dictionary with indices:")
print(characters_dict)

# 2. Create a dictionary that maps indices to characters:
indices_dict = {index: user for index, user in enumerate(users)}
# Print the dictionary  
print("Indices dictionary with characters:")
print(indices_dict)

# 3. Create a dictionary where characters are sorted alphabetically and mapped to their indices:
sorted_characters_dict = {user: index for index, user in enumerate(sorted(users))}
# Print the sorted dictionary   
print("Sorted characters dictionary with indices:")
print(sorted_characters_dict)


