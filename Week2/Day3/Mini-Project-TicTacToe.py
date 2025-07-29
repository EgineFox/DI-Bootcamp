from builtins import KeyboardInterrupt
from tabulate import tabulate

def game_step(current_player):
    '''Performs a player's move'''
    while True:
        try:
            # Ask user for input
            user_input = input("Enter coordinates (for example: 1 A) or 'q' to quit: ").split()
            if not user_input:
                print("Incorrect input. Please try again.")
                continue
            if user_input[0].lower() == 'q':
                raise KeyboardInterrupt  # Just propagate the exception, do not print a message here
            # Convert input to board indices
            row = int(user_input[0]) - 1
            col = ord(user_input[1].upper()) - ord('A') + 1
            # Check if coordinates are valid
            if row not in range(3) or col not in range(1, 4):
                print("Invalid coordinates. Please try again.")
                continue
            # Check if cell is empty
            if game_board[row][col] == '':
                game_board[row][col] = current_player
                break
            else:
                print("Cell is already taken, please try again.")
        except KeyboardInterrupt:
            raise  # Just propagate the exception further
        except (IndexError, ValueError):
            print("Incorrect input. Please try again.")

# Initialize the game board
game_board = [
    [1,'', '', ''],
    [2,'', '', ''],
    [3,'', '', '']
]
headers = ["","A", "B", "C"]

def draw_board():
    '''Prints the current game board'''
    print(tabulate(game_board, headers=headers, tablefmt="grid"))

def check_win():
    '''Checks if there is a winner'''
    # Check rows
    for row in game_board:
        if row[1] == row[2] == row[3] != '':
            return True
    # Check columns
    for col in range(1, 4):
        if game_board[0][col] == game_board[1][col] == game_board[2][col] != '':
            return True
    # Check diagonals
    if game_board[0][1] == game_board[1][2] == game_board[2][3] != '':
        return True
    if game_board[0][3] == game_board[1][2] == game_board[2][1] != '':
        return True
    return False

def start_game():
    '''Main game loop'''
    print("Welcome to Tic Tac Toe game!")
    while True:
        # Reset the game board for a new game
        global game_board
        game_board = [
            [1,'', '', ''],
            [2,'', '', ''],
            [3,'', '', '']
        ]
        current_player = "X"
        steps = 0
        try:
            while True:
                draw_board()
                game_step(current_player)
                steps += 1
                # Check for a win
                if check_win():
                    draw_board()
                    print(f"Player {current_player} wins!")
                    break
                # Check for a draw
                if steps == 9:
                    draw_board()
                    print("It's a draw!")
                    break
                # Switch player
                current_player = "O" if current_player == "X" else "X"
        except KeyboardInterrupt:
            print("\nYou exited the game early.")
        # Ask if the user wants to play again
        again = input("Do you want to play again? (y/n): ").strip().lower()
        if again != "y":
            print("Thank you for playing!")
            break

# Start the game
start_game()