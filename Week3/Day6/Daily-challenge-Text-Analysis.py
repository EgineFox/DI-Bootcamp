# Text Analysis
# Import necessary moduls
import os
import string

# from collections import Counter
# Step 1: Create the Text Class
class Text:
    def __init__(self, text):
       self.text = text
# Step 2: Implement word_frequency Method
    def word_frequency(self, word):
        '''clean punctuation with string module and count frequency'''
        cleaned_text = self.text.translate(str.maketrans('', '', string.punctuation))#clean punctuation
        words = cleaned_text.split()# Split text into a words
        count = words.count(word) # Counts of word

        if count == 0:
            return f'"{word}" is not in the text'
        return count
# Step 3: Implement most_common_word Method
    def most_common_word(self):

         # Очистка текста: убираем пунктуацию и приводим к нижнему регистру
        cleaned = self.text.lower().translate(str.maketrans('', '', string.punctuation))
        words = cleaned.split()# Split the text into a list of words.
        
        frequency = {} #dictionary to store word frequencies

        # Find the word with the highest frequency
        for word in words:
            frequency[word] = frequency.get(word, 0) + 1 #Count of each word
        
        # Find max friquency
        max_frequency = max(frequency.values())

        most_common = [word for word, count in frequency.items() if count == max_frequency]

        return most_common
    
# Step 4: Implement unique_words Method
    def unique_words(self):
        words = self.text.split() # Split the text into a list of words
        unique_words = set(words) # Set unique words
        return list(unique_words)
    
# Part II: Analyzing Text from a File
# Step 5: Implement from_file Class Method
    @classmethod
    def from_file(cls, file_path):
        '''Create a new file object with content from file'''
        with open(file_path, 'r', encoding='utf-8') as file:
           content = file.read()
        return cls(content)
    

import re # regular expressions modul

# Create a class called TextModification that inherits from Text.
class TextModification(Text):

    # Step 7: Implement remove_punctuation Method
    def remove_punctuation(self):

        # create a translation table to remove punctuation
        translator = str.maketrans('','', string.punctuation)
        cleaned = self.text.translate(translator)
        return cleaned
    
    # Step 8: Implement remove_stop_words Method

    def remove_stop_words(self):
# Search online for a list of English stop words (common words like “a”, “the”, “is”).
       stop_words = {'a', 'the', 'is', 'in', 'at', 'to', 'and', 'of', 'on', 'for', 'with', 'as', 'by', 'an'}
       words = self.text.split() # Split the text into a list of words
       filtered_words = [word for word in words if word.lower() not in stop_words]
       return ' '.join(filtered_words)
    
#    Step 9: Implement remove_special_characters Method 
    def remove_special_characters(self):
        # remove special characters from the text attribute.
       cleaned = re.sub(r'[^A-Za-z0-9\s]', '', self.text)
       return cleaned
    
# Create a Text object from a string
txt = Text("This is a test. This test is simple.")

print(txt.word_frequency("test"))        
print(txt.most_common_word())            
print(txt.unique_words())                 
# Create a TextModification object
mod = TextModification("Hello! This is a test, with punctuation & special characters.")

print(mod.remove_punctuation())           
print(mod.remove_stop_words())            
print(mod.remove_special_characters())    


               




                