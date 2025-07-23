# Challenge 1: Multiples of a Number
num = int(input("Enter a number: ")) #asked by the user number
len = int(input("Enter the lenght: ")) # asked by the user length
# Create a list of multiples of the number up to the specified length
new_list = [] # Initialize an empty list to store the multiples
mult = 1 # Initialize a multiplier variable
while mult<= len: # Loop until the multiplier exceeds the specified length
    new_list.append(num * mult) # Append the current multiple to the list
    mult += 1 # Increment the multiplier for the next iteration
else:
    print(new_list) # Print the list of multiples after the loop completes

# Challenge 2: Remove Consecutive Duplicate Letters
user_string = input("Enter a string: ")  # asked by the user string
def remove_consecutive_duplicates(user_string): # Function to remove consecutive duplicate letters 
    result = "" # Initialize an empty string to store the result
    for char in user_string: # Iterate through each character in the input string
        if char not in result: # Check if the character is not already in the result string
            result += char # Append the character to the result string if it's not a duplicate
    return result 
print(f"String after removing consecutive duplicates: {remove_consecutive_duplicates(user_string)}") # Print the result of the function call with the user input string