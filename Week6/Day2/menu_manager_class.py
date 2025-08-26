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

