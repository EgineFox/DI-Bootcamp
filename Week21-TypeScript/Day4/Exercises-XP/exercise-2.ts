class Product {
    constructor (
        readonly id: number,
        public name: string,
        public price: number,
    )
    {}

    getProductInfo(): string {
        return ` Product's name: ${this.name}, Price: NIS ${this.price}`
    }
}

// example of usage:
const laptop = new Product(1, "Laptop", 1200);
console.log(laptop.id);

console.log(laptop.getProductInfo());
laptop.name = 'Gaming Laptop';
laptop.price = 2500;
console.log(laptop.getProductInfo());


