const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
                   {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          
];


// create container for logo + searching
const header = document.createElement('div');
header.className = 'header';
header.style.width = '100%';
header.style.height = '50px';
header.style.margin = '0px';
header.style.padding = '0 20px';
header.style.position = 'relative';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'space-between';
header.style.backgroundColor = '#00FA9A';
document.body.appendChild(header);


// create space for logo
const logoDiv = document.createElement("div");
logoDiv.className ='libertinus-keyboard-regular';
logoDiv.style.flex = '0 0 auto';
logoDiv.textContent="Robofriends";
logoDiv.style.fontSize = '20px'; 
header.appendChild(logoDiv);

// create space for search
const search = document.createElement('div');
search.style.flex = '1';
search.style.display = 'flex';
search.style.justifyContent = 'flex-end';
header.appendChild(search);

var searchField = document.createElement("input");
searchField.type = "search";
searchField.setAttribute('placeholder','Search Robots');
searchField.style.height = '70%';
searchField.style.width = "100%";
searchField.style.maxWidth = '500px'; 
searchField.style.padding = '5px';
searchField.style.borderRadius = '5px';
searchField.style.border = '1px solid #ccc';
searchField.style.marginRight = '50%';
search.appendChild(searchField);

// Execute a function when the user presses a key on the keyboard
searchField.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    searchFunc();    
  }
});

const body = document.querySelector('body');
body.style.backgroundColor ='#7B68EE';
body.style.backgroundImage = "url('circuit-pattern.png')";
body.style.margin = '0px';


const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.margin = '30px';
container.style.justifyContent = 'center';
container.style.justifyItems = 'center';
container.style.gap = '30px';
body.appendChild(container);

// function creating of cards with robots
function createRoboCards(robots) {
  // clean old cards;
  container.innerHTML = "";

  robots.forEach(robot => {
    const card = document.createElement('div');
    card.className = 'robocard';

    card.style.background = '	#40E0D0';
    card.style.backgroundImage = "url('card-pattern.png')";
    card.style.height = '300px';
    card.style.width = '220px';
    card.style.display = 'flex';
    card.style.flexDirection = "column";
    card.style.position = 'relative';
    card.style.borderRadius = '5%';
   
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });

    card.innerHTML = `
  <img src="${robot.image}" alt="${robot.name}" style="
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #191970;
    object-fit: cover;
    margin: 20px auto 10px auto;
    display: block;
  " />
  <h2 style="font-size:15px; font-family: Arial, sans-serif; text-align:left; margin: 10px">${robot.name}</h2>
  <p style="text-align:left; font-family: Arial, sans-serif; font-size:10px; margin: 10px;">${robot.email}</p>
`;
    container.appendChild(card);    
  });
}


createRoboCards(robots);

//searching
function searchFunc() {
  const query = searchField.value.trim().toLowerCase();

  if (query === "") {
   alert("Please enter a name to search.");
    createRoboCards(robots);
  }
  const result = robots.filter( robot => robot.name.toLowerCase().includes(query));
   if (result.length>0) {
    createRoboCards(result);
    } else {
    alert(`${searchField.value} wasn't found! Try again...`);
    createRoboCards(robots);container.innerHTML = "<p style='color: white; font-size: 18px;'>No robots found.</p>";
}
searchField.value = "";
}
   


