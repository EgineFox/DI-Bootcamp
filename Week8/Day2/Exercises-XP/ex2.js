// 1 Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log('Task 1');
console.log(form);


// 2 Retrieve the inputs by their id and console.log them.
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log('Task 2');
console.log(firstNameInput);
console.log(lastNameInput);

// 3  Retrieve the inputs by their name attribute and console.log them.
const firstNameInputs = document.getElementsByName('firstname');
const lastNameInputs = document.getElementsByName('lastname');
console.log('Task 3');
console.log(firstNameInputs[0]); // Logs the first input with name="firstname"
console.log(lastNameInputs[0]);  // Logs the first input with name="lastname"

/* 4 When the user submits the form (ie. submit event listener)
- use event.preventDefault(), why ?
- get the values of the input tags,
- make sure that they are not empty,
- create an li per input value,
- then append them to a the <ul class="usersAnswer"></ul>, below the form.