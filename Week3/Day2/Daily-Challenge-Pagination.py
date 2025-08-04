class Pagination:
    def __init__(self, items = None, page_size = 10):
        '''init method'''
        self.items = items if items is not None else [] #If items is None, initialize it as an empty list.
        self.page_size = page_size
        self.current_ind = 0

    def get_visible_items(self):
        ''' returns the list of items visible on the current page.'''
        end_ind = self.current_ind + self.page_size
        return self.items[self.current_ind:end_ind]

#Calculate total number of pages using math.ceil.    
import math
total_items = 87      # example value
items_per_page = 10   # example value

total_pages = math.ceil(total_items / items_per_page)
print(total_pages)  # Output: 9

