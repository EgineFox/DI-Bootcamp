# # Exercise 1: Formula
# # Q = Square root of [(2 * C * D)/H]
import math

c = 50
h = 30
d_input = input('Enter comma-separated string of numbers for some D-values \n')
d_values = [int(x) for x in d_input.split(',')]
# q = ((2 * c * d) / h)**0.5
result = []
for d in d_values:
    value = (2*c*d)/h
    if value<0:
       result.append('Error: Negative value')
    else: 
        q = math.sqrt(value)
        # result.append(round(q,2))
        result.append(int(q))
print(result)

# Exercise 2 : List of integers
list_int =  [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] #1. Store the list of numbers in a variable.
print(list_int)
new_list = sorted(list_int, reverse=True)
print(new_list)
total = sum(list_int)
print(total)


f = list_int[0]
l = list_int[-1]
fl = [f , l]
print(fl)


filtered_list_g50 = [x for x in list_int if x >= 50]
print(filtered_list_g50)

filtered_list_s10 = [x for x in list_int if x <=10]
print(filtered_list_s10)

squared_list = [x**2 for x in list_int]
print(squared_list)

list_wd = list(set(list_int))
print(list_wd, len(list_wd))

average_num = sum(list_int)/len(list_int)
print(average_num)

num_max = max(list_int)
print(num_max)


num_min = min(list_int)
print(num_min)

#11 Bonus: Find the sum, average, largest and smallest number without using built in functions.
total_sum = 0
count = 0
for num in list_int:
    total_sum+=num
    count+=1

aver = total_sum/count
print(total_sum, count, aver)

list_int.sort()
largest = list_int[-1]
smallest = list_int[0]
print(largest, smallest)

# 12. Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
list_int_user = []
count = 1
while count <=10:
    try:
          num = int(input(f'Please enter a number {count} between -100 and 100 \n') )     
          if -100 <= num <=100:
             list_int_user.append(num)
             count +=1
          else: 
              print("Number out of range. Try again")
    except ValueError:
        print("Invalid input")
print(list_int_user)

# 13. Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
import random
random_list = []
count_r = 1
while count_r <=10:
    random_list.append(random.randint(-100,100))
    count_r +=1
print(random_list)

14. Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
random_l_50 = []
count_ran = random.randint(50, 100)
count_r_index = 1
while count_r_index <=count_ran:
    random_l_50.append(random.randint(-100,100))
    count_r_index +=1
print(random_l_50)

# Exercise 3: Working on a paragraph
import re

paragraph  = '''Oracle’s Miracle Agent
Developer: Oracle
Release Date: Rolling out with Fusion Cloud updates in 2025
Overview:
Oracle’s Miracle Agent is part of its suite of over 50 AI agents integrated into the Fusion Cloud. These agents revolutionize processes in finance, HR, supply chain management, and customer service. For example, Oracle’s document agent can capture data from vendor quotes, translate it, and generate purchase requests. Additionally, it assists with vendor invoices, offering end-to-end automation.'''

# 2: Analyze the paragraph
# Remove leading/trailing whitespace
clean_paragraph = paragraph.strip()

# Count characters
char_count = len(clean_paragraph)

# Count non-whitespace characters
non_whitespace_count = len(re.sub(r'\s', '', clean_paragraph))

# Count sentences (basic split by punctuation)
sentences = re.split(r'[.!?]+', clean_paragraph)
sentences = [s for s in sentences if s.strip()]  # Remove empty strings
sentence_count = len(sentences)

# Count words
words = re.findall(r'\b\w+\b', clean_paragraph)
word_count = len(words)

# Count unique words
unique_words = set(word.lower() for word in words)
unique_word_count = len(unique_words)

# Count non-unique words
non_unique_word_count = word_count - unique_word_count

# Average words per sentence
avg_words_per_sentence = word_count / sentence_count if sentence_count else 0

#  Step 3: Print results
print(" Paragraph Analysis:")
print(f"Total characters: {char_count}")
print(f"Non-whitespace characters: {non_whitespace_count}")
print(f"Total sentences: {sentence_count}")
print(f"Total words: {word_count}")
print(f"Unique words: {unique_word_count}")
print(f"Non-unique words: {non_unique_word_count}")
print(f"Average words per sentence: {avg_words_per_sentence:.2f}")

# Exercise 4 : Frequency Of The Words
from collections import defaultdict

# Input string
text = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."

# Step 1: Split into words (preserving punctuation)
words = text.split()

# Step 2: Count word frequencies
freq = defaultdict(int)
for word in words:
    freq[word] += 1

# Step 3: Print results
for word in sorted(freq):
    print(f"{word}:{freq[word]}")
