import os
from itertools import permutations

class AnagramChecker:
    def __init__(self, word_list_file):
        # This constructor loads words from a file into a set for quick lookup
        self.word_list = set()  # Create an empty set to store words

        try:
            # Get the path to the file relative to the script location
            script_dir = os.path.dirname(os.path.abspath(__file__))
            file_path = os.path.join(script_dir, word_list_file)

            # Open the file and read each word, converting to lowercase
            with open(file_path, 'r', encoding='utf-8') as file:
                for line in file:
                    word = line.strip().lower()
                    if word:  # Make sure the line is not empty
                        self.word_list.add(word)

        except FileNotFoundError:
            print("The word list file was not found.")
        except Exception as e:
            print("Something went wrong while loading the word list:", e)

    def is_valid_word(self, word):
        # Check if the word exists in our word list
        return word.lower() in self.word_list

    def get_anagrams(self, word):
        # This function returns a list of valid anagrams for the input word
        word = word.lower()

        # First, check if the word is valid
        if not self.is_valid_word(word):
            return []

        # Generate all possible letter combinations (permutations)
        all_combinations = set(''.join(p) for p in permutations(word))

        # Filter out the original word and keep only valid words
        anagrams = []
        for combo in all_combinations:
            if combo != word and combo in self.word_list:
                anagrams.append(combo)

        return sorted(anagrams)  # Return sorted list for easier reading
    
    def is_anagram(self, word1, word2):
    # Check if two words are anagrams of each other
       return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()

# Example usage
checker = AnagramChecker("sowpods.txt")  # Make sure this file exists

word = "MEAT"
anagrams = checker.get_anagrams(word)
print("Anagrams for", word, ":", anagrams)
