// const express = rerquire('express');
import express from 'express';

/** body-parser -> JSON */

const app = express();
app.use(express.json())

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`run on ${PORT}`);
});

/*
*app.get
*app.post
*app.put
*app.delete
*/
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  } ];

  /** CRUD **/
  app.get('/users', (request, response) => {
      // response.send('hi from server')
      response.send(users) // response.json(users)
    });
    
    /** CRUD - get 1 user **/
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(item => item.id == id);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  res.json(user);
});

/** SEARCH */
app.get('/users/search', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ message: 'Missing name query parameter' });
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredUsers.length === 0) {
    return res.status(404).json({ message: 'user not found' });
  }

  res.json(filteredUsers);
});

/** POST Crud */
app.post('/users', (req, res) => {
 const { name, username, email} = req.body;
  // Проверка на наличие обязательных полей
  if (!name || !username || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Генерация нового ID
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newId,
    name,
    username,
    email,
    address: {},
    phone: '',
    website: '',
    company: {}
  };

  users.push(newUser);

  res.status(201).json(newUser);
});
 /** PUT */
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  // Найти пользователя по ID
  const userIndex = users.findIndex(user => user.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Обновить поля (если они переданы)
  if (name) users[userIndex].name = name;
  if (username) users[userIndex].username = username;
  if (email) users[userIndex].email = email;

  res.json(users[userIndex]);
});

/** cruD - delete user by ID */
app.delete('/users/:id', (req,res) =>{
    const { id } = req.params;
  const { name, username, email } = req.body;

  // Найти пользователя по ID
  const userIndex = users.findIndex(user => user.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.slice(userIndex, 1);
  res.json(users);
})
