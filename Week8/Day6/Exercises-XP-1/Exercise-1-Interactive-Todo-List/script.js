let newTask = document.getElementById("inputTask");

let buttonAdd = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");

let arrTasks = [];
let taskCounter = 0;


// function for filter buttons
const filter = (e) => {
  document.querySelectorAll('#fButtons button').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
}

let bAll = document.getElementById("bAll");
bAll.addEventListener('click', (e) => {
    filter(e);
  tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
       task.style.display = 'flex'; 
    }
)});
 
let bActive = document.getElementById("bActive");
let bCompleted = document.getElementById("bCompleted");
bCompleted.addEventListener('click', (e) => {
    filter(e);
  tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    if (task.classList.contains('completed')) {
        task.style.display = 'flex'; // показываем
    } else {
        task.style.display = 'none'; // скрываем
    }
});
}
);  
bActive.addEventListener('click', (e) => {
    filter(e);
  tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    if (task.classList.contains('completed')) {
        task.style.display = 'none'; // 
    } else {
        task.style.display = 'flex'; // 
    }
});
}
);  


// Function for new task
const addTask = () => {
  
  if (newTask.value.trim() === "") {
    alert("Please type valid task first");
  } else {
    taskCounter++;
    const taskId = taskCounter; 
    arrTasks.push(newTask.value.trim());
    const divTask = document.createElement("div");
    divTask.classList = "task";
   // divTask.classList.add("active");

    divTask.id = `divTask_${taskId}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox_${taskId}`;
    const taskText = document.createElement("label");
    taskText.setAttribute("for", `${checkbox.id}`);
    const taskTextNode = document.createTextNode(`${newTask.value}`);

    document.getElementById("tasks").appendChild(divTask);
    divTask.appendChild(checkbox);

    divTask.appendChild(taskText);
    taskText.appendChild(taskTextNode);

    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "REMOVE";
    buttonRemove.id = `buttonRemove_${taskId}`;
    buttonRemove.addEventListener('click', (e) => {
        deleteTask(taskId); 
    })

    divTask.appendChild(buttonRemove);

    checkbox.addEventListener("change", () => {
      divTask.classList.toggle("completed");
    });

    newTask.value = "";
    bAll.classList ='active';
  }
};

buttonAdd.addEventListener("click", addTask);

// Function find ID elements
const findIdNum = (elementId) => {
  return Number(elementId.match(/\d+/)[0]);
};
console.log(findIdNum("checkbox_15"));

// Function removing each one task

const deleteTask = (taskIdNum) => {
    const divToDel = document.getElementById(`divTask_${taskIdNum}`);
if (divToDel) {
    divToDel.remove(); 
}
};


// Function for  removeButton (ALL)
const removeAllButton = document.getElementById('removeButton');
removeAllButton.addEventListener('click', () => {
  newTask.value = '';
})

