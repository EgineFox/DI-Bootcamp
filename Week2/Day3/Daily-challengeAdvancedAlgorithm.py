import random
# creates a list of 20,000 random numbers between 0 and 10,000.
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

# Copy this code, and create a program that finds, within list_of_numbers all the pairs of number that sum to the target number

# Find pairs
seen_numbers = set() #set that stores numbers that have already been looked at
unique_pairs = set() #set to store unique pairs to avoid duplicates

def find_pair():
    for number in list_of_numbers:
        complement = target_number - number
        if complement in seen_numbers:
            pair = tuple(sorted((number, complement)))
            unique_pairs.add(pair)
        seen_numbers.add(number)

    for num1, num2 in unique_pairs:
        print(f"{num1} and {num2} sum to {target_number}")

find_pair()