const button = document.getElementById("jsstyle");

button.addEventListener('click',()=>{
    button.style.backgroundColor = 'pink';
});

button.addEventListener('mouseover',()=>{
    button.style.fontFamily = "TimesNewRoman";
});

button.addEventListener('mouseout', () => {
    button.style.borderStyle = "5px";
});