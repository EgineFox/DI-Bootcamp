# Import the AnagramChecker class from the other file for using is_valid_word() and get_anagrams()
from anagram_checker import AnagramChecker

# This function removes extra spaces and converts input to lowercase
def clean_input(user_input):
    return user_input.strip().lower()

# This function checks if the input contains only one word
def is_single_word(word):
    return len(word.split()) == 1

# This function checks if the word contains only letters (no numbers or symbols)
def is_alpha_only(word):
    return word.isalpha()

# Main function that runs the user interface
def main():
    # Create an instance of AnagramChecker using the word list file
    checker = AnagramChecker("sowpods.txt")

    # Start a loop to keep showing the menu until the user chooses to exit
    while True:
        print("\n--- ANAGRAM CHECKER ---")
        print("1. Enter a word")
        print("2. Exit")

        # Ask the user to choose an option
        choice = input("Choose an option (1 or 2): ").strip()

        # If the user chooses to exit
        if choice == "2":
            print("Goodbye!")
            break

        # If the user wants to enter a word
        elif choice == "1":
            user_input = input("Enter a single English word: ")
            word = clean_input(user_input)

            # Check if the input is only one word
            if not is_single_word(user_input):
                print("Error: Please enter only one word.")
                continue

            # Check if the word contains only letters
            if not is_alpha_only(word):
                print("Error: Only alphabetic characters are allowed.")
                continue

            # Display the word in uppercase
            print(f"\nYOUR WORD: \"{word.upper()}\"")

            # Check if the word is valid (exists in the word list)
            if checker.is_valid_word(word):
                print("This is a valid English word.")
            else:
                print("This is NOT a valid English word.")

            # Get all valid anagrams of the word
            anagrams = checker.get_anagrams(word)

            # Display the anagrams if any are found
            if anagrams:
                print("Anagrams for your word:", ", ".join(anagrams))
            else:
                print("No anagrams found.")

        # If the user enters something other than 1 or 2
        else:
            print("Invalid choice. Please enter 1 or 2.")

# This makes sure the main function runs when the script is executed directly
if __name__ == "__main__":
    main()
