// Exercise 1 : Select a kind of Music
/*var selector = document.querySelector("#genres");
selector.addEventListener('change', function () {
    alert(selector.value);
} );

var classic = document.createElement('option')
classic.value = 'classic';
classic.textContent = 'Classic';
classic.setAttribute('selected', 'selected');
selector.appendChild(classic); 

//Exercise 2: Delete colors
const button = document.getElementById('b');
button.addEventListener('click', removecolor);

const selcolor = document.getElementById('colorSelect');

 
function removecolor() {
    const selectedIndex = selcolor.selectedIndex;
    if (selectedIndex != -1 ) {
        selcolor.remove(selectedIndex);
    } 
}; 
*/

// Exercise 3 : Create a shopping list
//1
let shoppingList=[];

//2
const root = document.getElementById('root');

let form = document.createElement('form');
root.appendChild(form);

let input = document.createElement('input');
input.type = 'text';
form.appendChild(input);

let but = document.createElement('button');
but.type = 'submit';
but.textContent = 'AddItem';
form.appendChild(but);

//3
but.addEventListener('click', addItem);
    
function addItem() {
    event.preventDefault();
    var item = input.value;
    shoppingList.push(item);
    console.log('Shopping List:', shoppingList);
    input.value = '';
}

//4
const clear = document.createElement('button');
clear.type = 'submit';
clear.textContent = 'ClearAll';
form.appendChild(clear);

clear.addEventListener('click',clearAll);

//5
function clearAll(){
    event.preventDefault();
    shoppingList=[];
}
