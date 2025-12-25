interface User {
    readonly id: number,
    name: string,
    email: string,
}

interface PremiumUser extends User {
    membershipLevel?: string,
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}

const user1: PremiumUser = {
    id: 1,
    name: "Ekaterina",
    email: "kate@example.com"
};
console.log(user1.id);  
user1.name = "Kate";

const premiumUser1: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};

const premiumUser2: PremiumUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com"
};
printUserDetails(user1);
printUserDetails(premiumUser1);