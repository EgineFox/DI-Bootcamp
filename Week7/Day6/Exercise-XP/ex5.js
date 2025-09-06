// 1. Retrieve the div and log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2. Change “Pete” to “Richard”
const firstUl = document.querySelectorAll("ul.list")[0];
firstUl.children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll("ul.list")[1];
secondUl.removeChild(secondUl.children[1]); // Removes "Sarah"

// 4. Change the first <li> of each <ul> to your name
const allUls = document.querySelectorAll("ul.list");
allUls.forEach(ul => {
  ul.children[0].textContent = "Ekaterina";
});

// 5. Add class "student_list" to both <ul>s
allUls.forEach(ul => {
  ul.classList.add("student_list");
});

// 6. Add classes "university" and "attendance" to the first <ul>
firstUl.classList.add("university", "attendance");

// 7. Style the <div>: light blue background and padding
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 8. Hide the <li> that contains “Dan”
const danLi = Array.from(secondUl.children).find(li => li.textContent === "Dan");
if (danLi) {
  danLi.style.display = "none";
}

// 9. Add border to the <li> that contains “Richard”
const richardLi = Array.from(firstUl.children).find(li => li.textContent === "Richard");
if (richardLi) {
  richardLi.style.border = "2px solid black";
}

// 10. Change font size of the whole body
document.body.style.fontSize = "18px";

// BONUS: Alert if background is light blue
if (containerDiv.style.backgroundColor === "lightblue") {
  const userNames = Array.from(document.querySelectorAll("ul.list li"))
    .map(li => li.textContent)
    .filter(name => name !== "Dan"); // Exclude hidden "Dan"
  alert(`Hello ${userNames[0]} and ${userNames[1]}`);
}
