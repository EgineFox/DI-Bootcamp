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
