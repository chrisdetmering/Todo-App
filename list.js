const newEntry = document.querySelector('input');

const theList = document.querySelector('.items');

newEntry.forEach(entry => {
    theList.innerHTML += `<li>${entry}</li>`;
});