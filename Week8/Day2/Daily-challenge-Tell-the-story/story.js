let currentInputs = {}; // empty object for stores the latest user inputs

function getUserInputs() {
    currentInputs.noun = document.getElementById('noun').value;
    currentInputs.adjective = document.getElementById('adjective').value;
    currentInputs.person = document.getElementById('person').value;
    currentInputs.verb = document.getElementById('verb').value;
    currentInputs.place = document.getElementById('place').value;
}

function checkerEmpty() {
    return currentInputs.noun && currentInputs.adjective && currentInputs.person &&
           currentInputs.verb && currentInputs.place;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateStory() {
    const templates = [
        `${currentInputs.person} grabbed a ${currentInputs.adjective} ${currentInputs.noun} and decided to ${currentInputs.verb} all the way to ${currentInputs.place}.`,
        `While walking through ${currentInputs.place}, ${currentInputs.person} saw a ${currentInputs.adjective} ${currentInputs.noun} trying to ${currentInputs.verb} in the middle of the street.`,
        `${currentInputs.person} invented a ${currentInputs.adjective} machine that could ${currentInputs.verb} any ${currentInputs.noun} in ${currentInputs.place}.`,
        `At ${currentInputs.place}, ${currentInputs.person} discovered a ${currentInputs.adjective} ${currentInputs.noun} with a note that said 'Please ${currentInputs.verb} before it's too late!'`,
        `${currentInputs.person} entered the ${currentInputs.place} talent show with a ${currentInputs.adjective} ${currentInputs.noun} and tried to ${currentInputs.verb} in front of everyone.`
    ];

    const rn = getRandomInt(templates.length);
    document.getElementById('story').textContent = templates[rn];
}

// Original button to generate story
document.getElementById('lib-button').addEventListener('click', (event) => {
    event.preventDefault();
    getUserInputs();
    if (checkerEmpty()) {
        generateStory();
        document.getElementById('noun').value = '';
        document.getElementById('adjective').value = '';
        document.getElementById('person').value = '';
        document.getElementById('verb').value = '';
        document.getElementById('place').value = '';

    } else {
        alert('Please fill in all the blanks!');
    }
});

// Shuffle button to reshuffle story
document.getElementById('shuffle-button').addEventListener('click', (event) => {
    event.preventDefault();

    if (checkerEmpty()) {
        generateStory();
    } else {
        alert('Please fill in all the blanks before shuffling!');
    }
});