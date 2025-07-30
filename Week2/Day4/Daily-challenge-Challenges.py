# Challenge 1: Sorting
# Ask the user to input a list of words separated by commas
user_string = input("Please enter your words, separated by commas:\n")
# Split the input string into a list using commas as separators,
# and remove any extra spaces around each word
new_list = [word.strip() for word in user_string.split(',')]
# Sort the list of words alphabetically and join them back into a single string,
# separating the words with commas
sorted_string = ', '.join(sorted(new_list))

print(sorted_string)

# Challenge 2: Longest Word
def compare_leng(sentence):
 '''find the longest word in a sentence'''   
 longest_word = ''
 max_length = 0
 # Loop through each word
 for w in sentence.split():
        w = w.strip()  
        # Check if current word is longer than the previous longest
        if len(w) > max_length:
            longest_word = w
            max_length = len(w)
 return longest_word

user_sentence = input('Please enter a sentence:\n')
result = compare_leng(user_sentence)
print(f"The longest word is: {result}")