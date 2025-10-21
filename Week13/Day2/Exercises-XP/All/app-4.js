import { TodoList } from './todo.js';

const myList = new TodoList();

myList.addTask('Buy groceries');
myList.addTask('Do the Dayly Challenge');
myList.addTask('Finish homework');

myList.markComplete(0); // Mark "Buy groceries" as complete

myList.listTasks();
