# Challenge 1: Letter Index Dictionary

# Create a variable `user_word` that contains a word provided by the user.
user_word = input("Enter a word: ")
# Create a dictionary that maps each letter in a user-provided word to its index positions.
new_dict = {}
# Iterate through the user_word and populate the dictionary with letters as keys and their indices as values.
for i, l in enumerate(user_word):
    # If the letter is already a key in the dictionary, append the index to its list.
    if l in new_dict:
       new_dict[l].append(i)
    #    If the letter is not a key, create a new entry with the letter as the key and a list containing the index as the value.
    else:
        new_dict[l] = [i]
# Print the resulting dictionary.    
print(new_dict)

# Challenge 2: Affordable Items
# create a dictionary `items_purchase` with items and their prices.
items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
# Prompt the user to enter the amount of money they have.
wallet = input("Enter the amount of money you have: ")
# Filter the items in `items_purchase` to only include those that the user can afford.
# Convert the prices to integers for comparison, removing any dollar signs and commas.
items_purchase = {item: price for item, price in items_purchase.items() if int(price.replace("$", "").replace(",", "")) < int(wallet)}
purchuse = []
# Create a list of items that the user can afford.
# If the list is not empty, sort it and print the items.
for item in items_purchase.items():
    purchuse.append(item[0])
if purchuse != []:
    purchuse.sort()
    print(purchuse)
else:
    print("Nothing")

