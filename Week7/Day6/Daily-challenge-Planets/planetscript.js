// Create array of objects
let planets = [
  { name: 'Mercury', color: '#b1b1b1', moons: 0 },
  { name: 'Venus', color: '#e1c16e', moons: 0 },
  { name: 'Earth', color: '#2e8b57', moons: 1 },
  { name: 'Mars', color: '#b22222', moons: 2 },
  { name: 'Jupiter', color: '#d2b48c', moons: 5 },
  { name: 'Saturn', color: '#deb887', moons: 6 },
  { name: 'Uranus', color: '#66cdaa', moons: 3 },
  { name: 'Neptune', color: '#4682b4', moons: 4 }
];


let section = document.querySelector(".listPlanets");
// Create planets
for (let planet of planets) {
  let div = document.createElement("div");
  div.classList.add("planet");
  div.style.backgroundColor = planet.color;
  div.textContent = planet.name;

  // Create moons
  for (let i = 0; i < planet.moons; i++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.top = `${Math.random() * 80}px`;
    moon.style.left = `${Math.random() * 80}px`;
    div.appendChild(moon);
  }

  section.appendChild(div);
}
