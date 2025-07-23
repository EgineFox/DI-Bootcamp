#Exercise 1: Favorite Numbers
my_fav_numbers = {1, 2, 3, 4, 5} # Set of favorite numbers
print(my_fav_numbers) # Display the set
add_set = {6, 7} # Set of numbers to add
my_fav_numbers.update(add_set) # Add numbers to the set
print(my_fav_numbers) # Display the updated set
my_fav_numbers.remove(7) # Remove a number from the set
print(my_fav_numbers) # Display the set after removal
# Set of favorite numbers of a friend
friend_fav_numbers = {8, 9, 10}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) # Combine both sets of favorite numbers
# Display the combined set
print(our_fav_numbers)

#Exercise 2: Tuple
my_tuple = (1, 2, 3, 4, 5) # Tuple of numbers
print(my_tuple) # Display the tuple
change_tuple = list(my_tuple) # Tuple of numbers to change
change_tuple.append(6) # Add a new number
change_tuple.append(7) # Add another new number
my_tuple = tuple(change_tuple) # Convert back to tuple
print(my_tuple) # Display the modified tuple

# Exercise 3: list Manipulation
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# Remove "Banana" from the list
basket.remove("Banana")
print(basket)  # Display the list after removal
basket.remove("Blueberries")  # Remove "Blueberries" from the list
print(basket)  # Display the list after removal
basket.append("Kiwi")  # Adding "Kiwi"
print(basket)  # Display the list after adding "Kiwi"
basket.insert(0, "Apples")  # Adding "Apples" at the beginning
print(basket)
print(basket.count("Apples"))  # Count how many times "Apples" appears
basket.clear()  # Clear the list
print(basket)  # Display the final empty list after clearing

# Exercise 4: floats
my_list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]  # List of sequence of mixed floats and integers

#Exercise 5: For Loop
for i in range(1,21):
    print(i)  # Print numbers from 1 to 20

for i in range(1,21):
    if i % 2 == 0:
        print(i)  # Print if the number is even

#Exercise 6: While Loop
user_name =input("Enter your name: ")  # Prompt user for their name
while len(user_name) < 3  or len(user_name) > 50:  # Check if the name length is valid
    print("Name must be between 3 and 50 characters.")  # Inform the user
    user_name = input("Please enter a valid name: ")  # Prompt again for a valid name
print(f"Welcome, {user_name}!")  # Greet the user with their name