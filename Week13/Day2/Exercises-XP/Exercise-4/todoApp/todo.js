export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      description,
      completed: false
    };
    this.tasks.push(task);
  }

  markComplete(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
    } else {
      console.log(`Task ${index} does not exist.`);
    }
  }

  listTasks() {
    console.log('Todo List:');
    this.tasks.forEach((task, i) => {
      const status = task.completed ? 'Done' : 'Pending';
      console.log(`${i}. ${task.description} — ${status}`);
    });
  }
}
