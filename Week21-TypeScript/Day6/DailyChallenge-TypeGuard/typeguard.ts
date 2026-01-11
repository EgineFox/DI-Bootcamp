type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

// create the Union type
type Data = User | Product | Order;

// Type Guard for User
function isUser(data: Data) : data is User {
    return data.type === 'user';
}

// Type Guard for Product
function isProduct(data: Data) : data is Product {
    return data.type === 'product';
}

// Type Guard for Order
function isOrder(data: Data) : data is Order {
    return data.type === 'order';
}

function processItem(item: Data): string {
    if (isUser(item)) {
        return `Hello, ${item.name}! You are ${item.age} years old.`;
    }
    
    if (isProduct(item)) {
        return `Product # ${item.id} costs $ ${item.price.toFixed(2)}.`;
    }
    
    if (isOrder(item)) {
        return `Order ${item.orderId}: Total amount $ ${item.amount.toFixed(2)}.`;
    }

    const exhaustiveCheck: never = item;
    return `Unknown data type: ${JSON.stringify(exhaustiveCheck)}` ;
}

function handleData( dataArray: Data[]) : string[] {
    return dataArray.map(item => processItem(item));
}

// Usage 
const testData: Data[] = [
  { type: 'user', name: 'Ekaterina', age: 36 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'ORD-12345', amount: 150.50 },
  { type: 'user', name: 'Anna', age: 7 },
];

const results = handleData(testData);
results.forEach(result => console.log(result));