import random

# List of possible words or phrases to guess
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference',
             'complete', 'share', 'credit card', 'rush', 'south']

# Randomly select one word from the list
word = random.choice(wordslist)

def display_word(word, guessed_letters):
    """
    Display the word with guessed letters shown and unguessed letters as asterisks (*).
    Non-alphabetic characters (e.g. spaces) are always shown.
    
    Args:
        word (str): The target word or phrase to guess.
        guessed_letters (set): A set of letters already guessed by the player.
        
    Returns:
        str: The masked word display with spaces between characters.
    """
    return ' '.join([letter if letter.lower() in guessed_letters or not letter.isalpha() else '*' for letter in word])

def print_hangman(tries):
    """
    Show the visual representation of the hangman based on number of incorrect guesses.
    
    Args:
        tries (int): Number of wrong guesses made so far.
    """
    stages = [
        r"""
           -----
           |   |
               |
               |
               |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
               |
               |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
           |   |
               |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
          /|   |
               |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
          /|\  |
               |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
          /|\  |
          /    |
               |
        =========""",
        r"""
           -----
           |   |
           O   |
          /|\  |
          / \  |
               |
        ========="""
    ]
    print(stages[min(tries, len(stages) - 1)])  # Prevents index out of bounds

def hangman():
    """
    Run the main Hangman game loop.
    Players guess letters until they either guess the word or run out of allowed attempts.
    """
    guessed_letters = set()       # Track correct and incorrect guesses
    wrong_guesses = 0             # Count of incorrect guesses
    max_tries = 6                 # Maximum allowed incorrect attempts

    print("Welcome to Hangman!")
    print("The word/phrase has", len(word.replace(' ', '')), "letters.")

    while wrong_guesses <= max_tries:
        print_hangman(wrong_guesses)
        print("Word:", display_word(word, guessed_letters))
        guess = input("Guess a letter: ").lower()

        # Validate input
        if not guess.isalpha() or len(guess) != 1:
            print("Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter. Try another one.")
            continue

        guessed_letters.add(guess)

        if guess in word.lower():
            print("Good guess!")
        else:
            print("Wrong guess!")
            wrong_guesses += 1

        # Check for win condition
        if all((ch.lower() in guessed_letters or not ch.isalpha()) for ch in word):
            print("\n🎉 Congratulations! You guessed the word:", word)
            break

        # Check for loss condition
        if wrong_guesses > max_tries:
            print_hangman(wrong_guesses)
            print("\n💀 Game over! The word was:", word)
            break

# Start the game
hangman()