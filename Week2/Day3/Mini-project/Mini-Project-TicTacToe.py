from tabulate import tabulate
def game_step(current_player):
    '''Doing step'''
    while True:
        try:
            user_input = input("Введите координаты (например: 1 A) или 'q' для выхода: ").split()
            if not user_input:
                print("Некорректный ввод. Попробуйте снова.")
                continue
            if user_input[0].lower() == 'q':
                raise KeyboardInterrupt
            row = int(user_input[0]) - 1
            col = ord(user_input[1].upper()) - ord('A') + 1
            if row not in range(3) or col not in range(1, 4):
                print("Некорректные координаты. Попробуйте снова.")
                continue
            if game_board[row][col] == '':
                game_board[row][col] = current_player
                break
            else:
                print("Клетка занята, попробуйте снова.")
        except KeyboardInterrupt:
            print("\nВы вышли из игры досрочно.")
            break  # <-- заменили exit() на break
        except (IndexError, ValueError):
            print("Некорректный ввод. Попробуйте снова.")
game_board = [
    [1,'', '', ''],
    [2,'', '', ''],
    [3,'', '', '']
]
headers = ["","A", "B", "C"]

def draw_board():
    '''Print game board'''
    print(tabulate(game_board, headers=headers, tablefmt="grid"))

def game_step(current_player):
    '''Doing step'''
    while True:
        try:
            user_input = input("Введите координаты (например: 1 A) или 'q' для выхода: ").split()
            if not user_input:
                print("Некорректный ввод. Попробуйте снова.")
                continue
            if user_input[0].lower() == 'q':
                raise KeyboardInterrupt  # Используем исключение для выхода из всех циклов
            row = int(user_input[0]) - 1
            col = ord(user_input[1].upper()) - ord('A') + 1
            if row not in range(3) or col not in range(1, 4):
                print("Некорректные координаты. Попробуйте снова.")
                continue
            if game_board[row][col] == '':
                game_board[row][col] = current_player
                break
            else:
                print("Клетка занята, попробуйте снова.")
        except KeyboardInterrupt:
            print("\nВы вышли из игры досрочно.")
            exit()
        except (IndexError, ValueError):
            print("Некорректный ввод. Попробуйте снова.")

def check_win():
    # Проверка строк
    for row in game_board:
        if row[1] == row[2] == row[3] != '':
            return True
    # Проверка столбцов
    for col in range(1, 4):
        if game_board[0][col] == game_board[1][col] == game_board[2][col] != '':
            return True
    # Проверка диагоналей
    if game_board[0][1] == game_board[1][2] == game_board[2][3] != '':
        return True
    if game_board[0][3] == game_board[1][2] == game_board[2][1] != '':
        return True
    return False

def start_game():
    while True:
        # Clear game board
        global game_board
        game_board = [
    [1,'', '', ''],
    [2,'', '', ''],
    [3,'', '', '']
    ]
        current_player = "X"
        steps = 0
        while True:
            draw_board()
            game_step(current_player)
            steps += 1
            if check_win():
               draw_board()
               print(f"Игрок {current_player} победил!")
               break
            if steps == 9:
               draw_board()
               print("Ничья!")
               break
            current_player = "O" if current_player == "X" else "X"
        again = input("Хотите сыграть ещё раз? (y/n): ").strip().lower()
        if again != "y":
            print("Спасибо за игру!")
            break

print("Welcome to Tic Tac Toe game!")
start_game()