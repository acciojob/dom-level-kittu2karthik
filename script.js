let level = 0;
const levelEl = document.querySelector('#level');

function getDomLevel(element) {
    let currentElement = element;
    while (currentElement && currentElement !== document) {
        level++;
        currentElement = currentElement.parentElement;
    }
    return level;
}

if (levelEl) {
    const domLevel = getDomLevel(levelEl);
    alert(`The level of the element is: ${domLevel}`);
} else {
    alert('Element with id "level" not found');
}