// 1. Change the id of the <div> from "navBar" to "socialNetworkNavigation"
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// 2. Create a new <li> with text "Logout" and append it to the <ul>
const ul = navDiv.querySelector("ul"); // Now using the updated ID
const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);
ul.appendChild(newLi);

// 3. Retrieve and display the first and last <li> elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);
