// Initialize an empty array to store task objects
let tasks = [];

// Add event listener to the form to handle task submission
document.querySelector('#taskForm').addEventListener('submit', function(e) {
  handleSubmit(e);
});

// Create a <ul> element to hold the task list
const ul = document.createElement('ul');
// Select the container where the task list will be displayed
const div = document.querySelector('.listTasks');

// Select the form element
const form = document.querySelector('#taskForm');
// Select the "Clear" button (corrected below)
const clearBut = document.querySelector(".clear");
// Initialize task ID counter
let id = 0;
// Append the <ul> to the container
div.append(ul);
// Add click event to the "Clear" button to reset the task list
clearBut.addEventListener("click", clearPage);

// Function to clear all tasks and reset the form
function clearPage() {
  tasks = [];
  renderTasks(tasks);
  form.reset();
}

// Function to handle form submission and add a new task
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form behavior
  const formData = new FormData(form);
  const taskText = formData.get('task');
  if (!taskText || taskText.trim() === '') return;  // Ignore empty input & spaces
  const task = generateTask(taskText); // Create task object
  tasks.push(task);
  renderTasks(tasks);
  form.reset();
}

// Function to render all tasks in the <ul>
function renderTasks(tasks) {
   //console.log(tasks);
   ul.innerHTML = ''; // Clear previous list items
   const container = document.querySelector('.listTasks');

    if (tasks.length === 0) {
    container.style.display = 'none'; // invisible if tasks is empty
    return;
  }

  container.style.display = 'flex'; // visible if tasks isn't empty

   for (const task of tasks) {
   const li = genLi(task);
   ul.append(li);
   }
}

// Function to create a single <li> element for a task
function genLi(task) {
 const li = document.createElement('li');
 li.dataset.id = task.id;

if (task.done) {
    li.classList.add('is-done');
}
// Create delete icon
 const xMark = document.createElement('i');
 xMark.classList.add('fa-solid', 'fa-xmark');
 xMark.addEventListener("click" , () => {
 delTask(task.id);
 } );
 // Create checkbox for marking task as done
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute("id", "chbox-"+task.id);
  checkbox.addEventListener('click', () => {
    markTaskDone(task.id);
  });
  // Create label for the task text
  const label = document.createElement('label');
  label.setAttribute("for", "chbox-"+task.id);
  checkbox.checked = task.done; // Reflect task status
  label.innerText = task.text;
  li.append(xMark, checkbox, label);
  return li;
}

// Function to create a new task object
function generateTask(text) {
  const task = {
    text : text,
    id: id,
    done: false
  };
  id++;
  return task;
}

// Function to toggle task completion status
function markTaskDone(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  task.done = !task.done;
  const li = document.querySelector(`[data-id="${id}"]`);
  li.classList.toggle("is-done");
}

// Function to delete a task by ID
function delTask(id) {
const li = document.querySelector(`[data-id ="${id}"]`);
if (li) li.remove();
/*
const newTasks =[];
for (const task of tasks) {
  if (task.id === id) {
    continue;
  }
  newTasks.push(task);
}
tasks = newTasks; */
tasks = tasks.filter(task => task.id !== id);
renderTasks(tasks);
}

