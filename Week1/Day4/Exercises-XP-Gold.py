# # Exercise 1: Concatenate lists
# Instructions
# Write code that concatenates two lists together without using the + sign.
a = [1, 2 , 3]
b = [4, 5, 6, 7, 8]
c = a.copy()  # Create a shallow copy so original 'a' stays untouched
c.extend(b)   # Extend 'c' with elements from 'b'
print(c)

# Exercise 2: Range of numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.
for number in range(1500,2501):
    if number % 5 == 0:
        print(number)
    elif number % 7 == 0:
        print(number)
    else:
        continue
    
# Exercise 3: Check the index
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter you name please: \n")

if user_name in names:
    index = names.index(user_name)
    print({index})

# Exercise 4: Greatest Number
n1 =input("Input the 1st number:\n")
n2 =input("Input the 2nd number:\n")
n3 =input("Input the 3rd number:\n")

print(f"The greatest number is: {max(n1, n2, n3)}")

# Exercise 5: The Alphabet
alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiou"
for l in alphabet:
    if l in vowels:
        print(f"{l.capitalize()} is vowel")
    else:
        print(f"{(l.capitalize())} is consonant")

# Exercise 6: Words and letters
words = []
for i in range(7):
    word = input(f"Enter word {i + 1}: ")
    words.append(word)

print("Your list of words:", words)
letter = input(f"Enter letter : ")

for word in words:
    if letter in word:
        index = word.index(letter)
        print(f"In the word '{word}', '{letter}' first appears at index {index}")
    else:
        print(f"Oops! The letter '{letter}' doesn't appear in '{word}'.")

# Exercise 7: Min, Max, Sum
# Create a list of numbers from 1 to 1,000,000
import time

numbers = list(range(1,1000001))
# Check if the list starts at 1 and ends at 1,000,000

print("Minimum number in the list:", min(numbers))
print("Maximum number in the list:", max(numbers))
# Start the timer
start_time = time.time()
# Sum the numbers
total = sum(numbers)
# End the timer
end_time = time.time()

# Print the result and the elapsed time
print(f"Sum of numbers: {total}")
print(f"Time taken: {end_time - start_time:.6f} seconds")

# Exercise 8 : List and Tuple
numbers =  34,67,55,33,12,98
list1 = list(numbers)
tuple1 = tuple(numbers)
print(list1 , tuple1)

# Exercise 9 : Random number
import random
# Initialize counters
wins = 0
losses = 0

while True:
    user_input = input("Enter a number from 1 to 9 (or type 'q' to quit): \n")
    
    if user_input.lower() == "q":
        print("Thanks for the game! See you next time!")
        print(f"🏆 Total Wins: {wins}")
        print(f"💔 Total Losses: {losses}")
        break
    try:
        user_number = int(user_input)
        
        if not 1 <= user_number <= 9:
            print("Please enter a number between 1 and 9.")
            continue

        random_num = random.randint(1, 9)

        if user_number == random_num:
            print("🎉 Winner! You guessed the correct number!")
            wins += 1

        else:
            print(f"😔 Better luck next time! The correct number was {random_num}.")
            losses += 1
 
    except ValueError:
        print("That's not a number! Type a digit from 1 to 9 or 'q' to quit.")
