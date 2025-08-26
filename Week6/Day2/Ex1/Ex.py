# SQL file:
CREATE TABLE menu_items (
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(30) NOT NULL,
item_price SMALLINT DEFAULT 0
)

 SELECT * FROM menu_items

# file  menu_editor.py
from menu_item import MenuItem
from menu_manager_class import MenuManager

def show_user_menu():
    while True:
        print("\n Restaurant Menu Editor")
        print("Choose an option:")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Full Menu")
        print("Q - Quit")

        choice = input("Your selection: ").strip().upper()

        if choice == 'V':
           view_item()
        elif choice == 'A':
           add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'Q':
            print("\nFinal Restaurant Menu:")
            show_restaurant_menu()
            print("Exiting menu editor. Goodbye!")
            break
        else:
            print("Invalid option. Please try again.")

def view_item():
    name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f" Found: {item.name} — {item.price}₪")
    else:
        print("Item not found.")

def add_item_to_menu():
    name = input("Enter the name of the new item: ").strip()
    try:
        price = float(input("Enter the price of the item: "))
    except ValueError:
        print("Error: Price must be a number.")
        return

    item = MenuItem(name, price)
    try:
        item.save()
        print("Item was added successfully.")
    except Exception as e:
        print(f"Failed to add item: {e}")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem(name)

    try:
        item.delete()
        print("Item was deleted successfully.")
    except Exception as e:
        print(f"Error: Failed to delete item. {e}")


def update_item_from_menu():
    current_name = input("Enter the name of the item you want to update: ").strip()
    new_name = input("Enter the new name for the item (or press Enter to keep it the same): ").strip()
    try:
        new_price = float(input("Enter the new price: "))
    except ValueError:
        print("Error: Price must be a number.")
        return

    # If the user didn't enter a new name, keep the current one
    if not new_name:
        new_name = current_name

    item = MenuItem(current_name)
    try:
        item.update(new_name, new_price)
        print("Item was updated successfully.")
    except Exception as e:
        print(f"Error: Failed to update item. {e}")


def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("The menu is currently empty.")
        return

    print("Restaurant Menu:")
    print("----------------")
    for item in items:
        print(f"{item.name} - ${item.price:.2f}")

        
# Optional: Run the menu when the script is executed directly
if __name__ == "__main__":
    show_user_menu()


# file menu_item.py :
import psycopg2
from menu_manager_class import MenuManager


class MenuItem:
    def __init__(self, name, price=None):
        self.name = name
        self.price = price


    def save(self):
        """Insert the item into the Menu_Items table."""
        conn = None
        cursor = None
        try:
            conn = psycopg2.connect(
                dbname="Restaurant",
                user="postgres",
                password="test",
                host="localhost",
                port="5432"
            )
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
                (self.name, self.price)
            )
            conn.commit()
        except psycopg2.Error as e:
            print(f"Error saving item: {e}")
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()

    def delete(self):
        """Delete the item from the Menu_Items table."""
        conn = None
        cursor = None
        try:
            conn = psycopg2.connect(
                dbname="Restaurant",
                user="postgres",
                password="test",
                host="localhost",
                port="5432"
            )
            cursor = conn.cursor()
            cursor.execute(
                "DELETE FROM Menu_Items WHERE item_name = %s",
                (self.name,)
            )
            conn.commit()
        except psycopg2.Error as e:
            print(f"Error deleting item: {e}")
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()

    def update(self, new_name, new_price):
        """Update the item's name and price in the Menu_Items table."""
        conn = None
        cursor = None
        try:
            conn = psycopg2.connect(
                dbname="Restaurant",
                user="postgres",
                password="test",
                host="localhost",
                port="5432"
            )
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                (new_name, new_price, self.name)
            )
            conn.commit()
            self.name = new_name
            self.price = new_price
        except psycopg2.Error as e:
            print(f"Error updating item: {e}")
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()


item = MenuItem('Burger', 35)
# item.save()
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)


item2 = MenuManager.get_by_name('Beef Stew')

# item.delete()
# item2 = MenuManager.get_by_name('Beef Stew')
items = MenuManager.all_items()


# file menu_manager_class.py :
import psycopg2



class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        from menu_item import MenuItem
        try:
            conn = psycopg2.connect(
                dbname="Restaurant",
                user="postgres",
                password="test",
                host="localhost",
                port="5432"
            )
            cursor = conn.cursor()
            cursor.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
            result = cursor.fetchone()
            cursor.close()
            conn.close()

            if result:
                return MenuItem(name=result[0], price=result[1])
            else:
                return None

        except psycopg2.Error as e:
            print(f"Error fetching item: {e}")
            return None

        
    @classmethod
    def all_items(cls):
        """Return a list of all MenuItem objects from the Menu_Items table."""
        from menu_item import MenuItem
        items = []
        try:
            conn = psycopg2.connect(
                dbname="Restaurant",
                user="postgres",
                password="test",
                host="localhost",
                port="5432"
            )
            cursor = conn.cursor()
            cursor.execute("SELECT item_name, item_price FROM Menu_Items")
            results = cursor.fetchall()
            cursor.close()
            conn.close()

            for row in results:
                items.append(MenuItem(name=row[0], price=row[1]))
            print(results)

        except psycopg2.Error as e:
            print(f"Database error: {e}")
            return []

