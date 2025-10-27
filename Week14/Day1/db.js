//import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
import {Pool} from 'pg';
console.log(process.env);

const {PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER} = process.env;
const pool = new Pool({
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false},
});

const result = await pool.query('select * from products');
console.log(result.rows)
// const db = knex({
//     client: 'pg',
//     connection:{
//         host: PGHOST,
//         port: PGPORT,
//         user: PGUSER,
//         database: PGDATABASE,
//         password: PGPASSWORD,
//         ssl: { rejectUnauthorized: false},
//     },
// });

// db('products')
//    .select('id','name','price')
//   .then((rows)=> console.log(rows))
//   .catch((error)=> console.log(error));

// try{
//     const result = await  db.raw(`select id, name, price from products where id=? and name=?`, [1,'Product 100']);
//     console.log(result.rows);
// } catch(error) {
//     console.log(error);
// }


// db('products')
//   .insert(
//     [
//         {name: 'iWatch', price: 123},
//         {name: 'iCofe', price: 2},
//     ], //['id','name']
//   )
//   .returning('*')
//   .then((rows) => console.log(rows))
//   .catch((error) => console.log(error));

// db('products')
//   .update(
//     {name: 'iWatch', price: 123})
     
//    .where({id: 6})
  
//   .returning('*')
//   .then((rows) => console.log(rows))
//   .catch((error) => console.log(error));

// db('products')
//   .del()
//    .where({id: 32})
//   .returning('*')
//   .then((rows) => console.log(rows))
//   .catch((error) => console.log(error));