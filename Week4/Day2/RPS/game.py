import random  # Import the random module to let the computer make random choices

class Game:
    # Ask the user to choose rock, paper, scissors, or quit
    def get_user_item(self):
        while True:
            user_item = input('Please enter "r" / "p" / "s" (rock/paper/scissors) for play or "q" for quit \n')
            if user_item in ('r', 'p', 's'):
                print(f'You chose: {user_item}')
                return user_item  # Return the user's choice
            elif user_item == 'q':
                print('Goodbye!')
                return None  # Return None to signal quitting the game
            else:
                print('Invalid input. Please enter "r", "p", "s" or "q".\n')  # Ask again if input is invalid

    # Let the computer randomly choose rock, paper, or scissors
    def get_computer_item(self):
        computer_item = random.choice(['r', 'p', 's'])  # Randomly pick one option
        print(f'Computer chose: {computer_item}')
        return computer_item  # Return the computer's choice

    # Decide who wins based on the rules of rock-paper-scissors
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "Draw"  # Same choice means it's a draw
        elif (user_item == 'r' and computer_item == 's') or \
             (user_item == 'p' and computer_item == 'r') or \
             (user_item == 's' and computer_item == 'p'):
            return "You win!"  # User wins if their choice beats the computer's
        else:
            return "Computer wins!"  # Otherwise, the computer wins

    # Main game loop: keep playing until the user quits
    def play(self):
        while True:
            user_item = self.get_user_item()  # Get user's choice
            if user_item is None:
                break  # Exit the loop if user wants to quit
            computer_item = self.get_computer_item()  # Get computer's choice
            result = self.get_game_result(user_item, computer_item)  # Determine the result
            print(result)  # Show the result

# # Create a Game object and start playing - for testing file game.py
# # if __name__ == "__main__":
#     game = Game()
#     game.play()

