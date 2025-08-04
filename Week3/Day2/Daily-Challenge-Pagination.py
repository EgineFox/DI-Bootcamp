import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if not 1 <= page_num <= self.total_pages:
            raise ValueError("Page number out of range")
        self.current_idx = page_num - 1

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        return "\n".join(self.get_visible_items())

# Example usage and testing
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print("Total pages:", p.total_pages)         # Displays total number of pages
print(p.get_visible_items())                 # ['a', 'b', 'c', 'd']
p.next_page()
print(p.get_visible_items())                 # ['e', 'f', 'g', 'h']
p.last_page()
print(p.get_visible_items())                 # ['y', 'z']

try:
    p.go_to_page(10)                         # Raises ValueError
except ValueError as ve:
    print("Error:", ve)                      # Handle out-of-range error gracefully
