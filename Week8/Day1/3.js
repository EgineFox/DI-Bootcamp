const form = document.getElementById('form1');
form.addEventListener('submit', getValue);

function getValue(e) {
  e.preventDefault();
  const form = e.target;
  const fName = form.elements["fname"].value;
  const lName = form.elements["lname"].value;

  alert(`First name is ${fName} and Last name is ${lName}`);
}