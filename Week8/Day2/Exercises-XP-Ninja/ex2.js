const body = document.getElementsByTagName('body')[0];

const form = document.createElement("form");
const input = document.createElement("input");
input.type = 'email';
body.appendChild(form);
form.appendChild(input);

var label = document.createElement('span'); 
form.appendChild(label);

//  with regex.


function validateEmailRex(email) {
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
     label.textContent = "E-mail is valid";
 } else {
    label.textContent = "E-mail is not valid";
    
 }
}

input.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        if (label.textContent != ""){
            label.textContent = "";
        }
        validateEmailRex(input.value);
        input.value='';
    }
})



//without regex.
input.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        if (label.textContent != ""){
            label.textContent = "";
        }
        if (this.checkValidity()){
           label.textContent = "E-mail is valid";
        } else {
            label.textContent = "E-mail is not valid"; 
        }
        input.value='';
    }
})