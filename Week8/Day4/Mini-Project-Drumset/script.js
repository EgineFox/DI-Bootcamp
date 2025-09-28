var allowedKeys = [65, 83,68,70,71,72,74,75,76];

window.addEventListener('keydown', (e)=>{
    var keyCode = e.keyCode;
    if (!allowedKeys.includes(keyCode)) return;
    e.preventDefault();
    e.stopPropagation();
    playAudio(keyCode);

});

var drums = document.getElementsByClassName('drum');
for (let i = 0; i <drums.length; i++) {
    drums[i].addEventListener('click', function() {

    var keyCode = this.getAttribute('data-key');
    playAudio(keyCode);
}, false);
}

function playAudio(keyCode) {
  var note = document.querySelector("audio[data-key='"+keyCode+"']");
  var drum = document.querySelector(".drum[data-key='"+keyCode+"']"); 
  note.currentTime = 0;   
  drum.classList.add('playing');
  setTimeout( ()=> {
    drum.classList.remove('playing');
  }, 100);
  if (note) {
  note.currentTime = 0;
  note.play();
}
 
}
    