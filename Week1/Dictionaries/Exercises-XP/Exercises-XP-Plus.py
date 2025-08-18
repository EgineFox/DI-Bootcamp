# # Exercise 1 : Student Grade Summary
# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }

# student_averages = {}
# for student,grades in student_grades.items():
#     average = sum(grades)/len(grades)
#     student_averages[student] = round(average,2)

# print(student_averages)

# student_letter_grades = {}
# for student,grades in student_averages.items():
#     if student_averages[student] >= 90:
#         student_letter_grades[student] = 'A'
#     elif 80 <= student_averages[student] < 90:
#         student_letter_grades[student] = 'B'
#     elif 70 <= student_averages[student] < 80:
#         student_letter_grades[student] = 'C'
#     elif 60 <= student_averages[student] < 70:
#         student_letter_grades[student] = 'D'
#     elif 60 <= student_averages[student]:
#         student_letter_grades[student] = 'F'

# print(student_letter_grades)
# class_average = sum(student_averages.values())/len(student_averages)
# print(round(class_average,2))

# for student in student_averages:
#     average = student_averages[student]
#     letter = student_letter_grades[student]
#     print(f'{student}: Average = {average}, Grade = {letter}')

# Exercise 2 : Advanced Data Manipulation and Analysis
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

# # Initialize dictionary to store total sales per product
# total_sales = {}
# # Loop through each sale record
# for sale in sales_data:
#     product = sale["product"]
#     revenue = sale["price"] * sale["quantity"]
    
#     if product in total_sales:
#         total_sales[product] += revenue
#     else:
#         total_sales[product] = revenue

# # Display the results
# for product, revenue in total_sales.items():
#     print(f"{product}: ${revenue}")

# solution:
# # Step 1: Total sales calculation
# total_sales = {}
# for t in sales_data:
#     product = t['product']
#     total_price = t['price']*t['quantity']
#     if product in total_sales:
#         total_sales[product]+= total_price
#     else:
#         total_sales[product]=total_price

# # Step 2: Customer Spending Profile
# total_customer = {}
# for t in sales_data:
#     customer = t['customer_id']
#     spent_amount = t['price']*t['quantity']
#     if customer in total_customer:
#        total_customer['customer_id'] =+spent_amount 
#     else:
#         total_customer['customer_id']=spent_amount 

# # Step 3 Sales Data Enhancement
      
# for transaction in sales_data:
#     transaction['total_price'] = transaction['price']*transaction['quantity']

# # print(sales_data)

# # Step 4 High-Value Transactions
# list_of_transactions = []
# for transaction in sales_data:
#     if transaction['total_price'] > 500:
#         list_of_transactions.append(transaction)

# list_of_transactions.sort(key=lambda x: x['total_price'], reverse=True)

# print(list_of_transactions)

# Step 5 Customer Loyalty Identification:
purchase_counts = {}
for transaction in sales_data:
    customer_id = transaction["customer_id"]
    if customer_id in purchase_counts:
        purchase_counts[customer_id] += 1
    else:
        purchase_counts[customer_id] = 1
loyal_customers = [customer_id for customer_id, count in purchase_counts.items() if count > 2]

print(loyal_customers)