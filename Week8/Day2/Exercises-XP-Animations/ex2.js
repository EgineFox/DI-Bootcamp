function myMove() {
    const elem = document.getElementById('animate');
    const container = document.getElementById('container');

    let pos = 0;
    const maxRight = container.clientWidth - elem.clientWidth;

    const id = setInterval(() => {
        if ( pos >= maxRight) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    } , 1);
}

