function calculateTip() {
    event.preventDefault();
var bill = document.getElementById('billamt');
var billAmount = bill.value;

var service = document.getElementById('serviceQual');
var serviceQuality = service.value;

var people  = document.getElementById('peopleamt');
var numberOfPeople = people.value;

if (serviceQuality == 0 || billAmount === '') {
    alert('Please enter bill amount and choose  how was servise!');
    } else {
 var total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2); 

var totalTip = document.getElementById('totalTip');
totalTip.style.display = 'block';

var tip = document.getElementById('tip');
tip.textContent = total;

}
}

var totalTip = document.getElementById('totalTip');
totalTip.style.display = 'none';

const calculate = document.getElementById('calculate');

calculate.onclick = function () {
    calculateTip();
}