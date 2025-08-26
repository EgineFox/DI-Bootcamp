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