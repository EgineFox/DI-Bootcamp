type Person = {
    name: string,
    age: number,
}
type Address = {addres: string}
type PersonWithAddress = Person & Address;

const exPerson: PersonWithAddress = {
    name: 'John',
    age: 42,
    addres: 'Tel-Aviv, Florentin, 6'
}