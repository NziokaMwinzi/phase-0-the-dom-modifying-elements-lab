// Remove the existing main element
const main = document.querySelector('main');
if (main) {
    main.remove();
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Dan is the champion';
document.body.appendChild(newHeader);