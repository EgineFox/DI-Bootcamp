const knex = require("knex");

const knexConfig = {
client: "pg",
connection: {
 host: "localhost",
 user: "your_username",
 password: "your_password",
 database: "your_database",
},
};

const db = knex(knexConfig);

const getUsers = async () => {
try {
 const users = await db.select("*").from("users");
 return users;
} catch (error) {
 console.error("Error fetching users:", error);
 throw error;
}
};

module.exports = {
getUsers,
};