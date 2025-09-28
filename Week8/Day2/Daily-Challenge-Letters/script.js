const inputField = document.getElementById('lettersOnly');

inputField.addEventListener('input', function(){
    this.value = this.value.replace(/[^a-zA-Z]/g, ' ');
})