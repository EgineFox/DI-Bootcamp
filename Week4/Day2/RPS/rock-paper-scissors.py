import game  # in file named game.py with the Game class

def get_user_menu_choice():
    print('\n***** Welcome to the Rock Paper Scissors Game! *****')
    print('Menu:')
    print('(g) Play a new game')
    print('(x) Show scores')
    print('(q) Exit')
    choice = input("Enter your choice: ").lower()
    return choice

def print_results(results):
    print("\n******** Game Results ********")
    print(f"Games played: {results['Played game']}")
    print(f"User wins: {results['User points']}")
    print(f"Computer wins: {results['Computer points']}")
    print(f"Draws: {results['Draw']}")
    print("***And remember: YOU ARE THE BEST!***\n")

  

def main():
     # Initialize results dictionary

    results = {
        'User points': 0,
        'Computer points': 0,
        'Draw': 0,
        'Played game': 0
    }


    while True:
        user_choice = get_user_menu_choice()

        if user_choice == 'g':
            game_instance = game.Game()
            user_item = game_instance.get_user_item()
            if user_item is None:
                continue  # Skip if user quits mid-game
            computer_item = game_instance.get_computer_item()
            result = game_instance.get_game_result(user_item, computer_item)
            print(result)
# Update results based on outcome
            results["Played game"] += 1
            if result == "Draw":
                results["Draw"] += 1
            elif result == "You win!":
                results["User points"] += 1
            else:
                results["Computer points"] += 1

        elif user_choice == 'x':
            print_results(results)
        elif user_choice == 'q':
            print_results(results)
            print("Thanks for playing! Goodbye!")
            
            break
        else:
            print("Invalid choice. Please try again.")

main()
