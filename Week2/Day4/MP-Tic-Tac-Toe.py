def display_board(board):
    print("\n")
    print("*************")
    print(f"* {board[0]} | {board[1]} | {board[2]} *")
    print("*---|---|---*")
    print(f"* {board[3]} | {board[4]} | {board[5]} *")
    print("*---|---|---*")
    print(f"* {board[6]} | {board[7]} | {board[8]} *")
    print("*************")
    print("\n")

def player_input(player, board):
    while True:
        try:
            position = int(input(f"Player {player} ({'X' if player == 1 else 'O'}), choose your position (1-9): ")) - 1
            if position in range(9) and board[position] == ' ':
                return position
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Please enter a number between 1 and 9.")

def check_win(board, mark):
    win_combos = [
        [0,1,2], [3,4,5], [6,7,8],  # Rows
        [0,3,6], [1,4,7], [2,5,8],  # Columns
        [0,4,8], [2,4,6]            # Diagonals
    ]
    return any(all(board[i] == mark for i in combo) for combo in win_combos)

def check_tie(board):
    return all(space != ' ' for space in board)

def play():
    board = [' '] * 9
    current_player = 1

    display_board(board)
    print("Player X's tyrn...\n")
    
    while True:
        mark = 'X' if current_player == 1 else 'O'
        position = player_input(current_player, board)
        board[position] = mark
        display_board(board)

        if check_win(board, mark):
            print(f"🎉 Player {current_player} wins!")
            break
        elif check_tie(board):
            print("🤝 It's a tie!")
            break

        current_player = 2 if current_player == 1 else 1

# Run the game
play()