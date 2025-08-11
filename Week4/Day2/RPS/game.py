import random

class Game:
    def get_user_item(self):
        while True:
            self.user_item = input(f'Please enter "r" / "p" / "s" (rock/paper/scissors) for play or "q" for quit')
            if self.user_item in ('r', 'p', 's'):
                print(f'You chose: {self.user_item}')
            elif self.user_item == 'q':
                print('Goodbye!')
                break
            else:
                print('Invalid input. Please enter "r", "p", "s" or "q".')



    def get_computer_item(self):
        computer_item = random.choice(['r', 'p', 's'])
        print(f'Computer chose: {computer_item}')
        return computer_item


    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "Draw"
        elif (user_item == 'r' and computer_item == 's') or \
             (user_item == 'p' and computer_item == 'r') or \
             (user_item == 's' and computer_item == 'p'):
            return "You win!"
        else:
            return "Computer wins!"

    def play(self):
        while True:
            user_item = self.get_user_item()
            if user_item is None:
                break
            computer_item = self.get_computer_item()
            result = self.get_game_result(user_item, computer_item)
            print(result)

game = Game()
game.play()
