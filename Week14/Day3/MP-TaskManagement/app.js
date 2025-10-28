import express from 'express';
const app = express();
import tasksRoutes from './routes/tasksRoutes.js';

app.use(express.json());
app.use('/tasks', tasksRoutes);

const port = 3000;
app.listen(port, () => {
   console.log(`Server is running at port ${port}`);
})