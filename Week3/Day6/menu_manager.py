import json
import os

class MenuManager:
    def __init__(self):
        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(current_dir, 'restaurant_menu.json')
        if os.path.exists('restaurant_menu.json'):
            with open('restaurant_menu.json', 'r') as file:
                try:
                    self.menu = json.load(file)
                except json.JSONDecodeError:
                    self.menu = {}
        else:
            self.menu = {}

            
    def add_item(self,name, price):
        self.menu[name] = price

    def remove_item(self, name):
        if name in self.menu:
            del(self.menu[name])
            return True
        else:
            return False


menu = MenuManager()
print(menu.menu)

# menu.add_item("Burger", 8.99)
# print(menu.menu)
# menu.add_item("Pizza", 12.50)
# print(menu.menu)