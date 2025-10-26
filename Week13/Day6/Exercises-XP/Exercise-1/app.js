/** const express = require('express');
const app = express();

const router = require('./routes/index.js');

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})

app.use('/', router); */

const express = require('express');
const app = express();

// Middleware для обработки JSON-тел запросов
app.use(express.json());

// Подключение маршрутов
const router = require('./routes/index.js');
app.use('/', router);

// Обработка ошибок (глобальный middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});