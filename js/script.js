const container = document.querySelector('.container');
const gridSelect = document.querySelector('.grid-size');

function gridCreate (number) {

for(let j = 1; j <= number; j++) {
    let container2 = document.createElement('div');
    container2.setAttribute('style', `display: flex; flex-direction: column;
    gap: 10px; flex: 1;`);
    container.append(container2);
    for (let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.id = i + j ;
        div.classList.add('pixel');
        div.setAttribute('style', `flex: 1; border: 2px solid; text-align: center;`)
        container2.append(div);
    }
    }
}

function changePixelColor(e) {
    if (e.target.classList.contains('pixel')) {
            e.target.classList.add('pixelHover');
    }
}

function selectGridSize(e) {
    if(container.hasChildNodes) {
    let children = container.children;
    Array.from(children).forEach (child => {child.remove();});
    let size = parseInt(prompt(`Enter a grid size (max: 100): `));
    while (size > 100) {
        size = prompt('Please enter a grid size less than 100!');
            if(size === null){
                return;
        }
    }
    gridCreate(size);
    }
}

gridCreate(15);

container.addEventListener('mouseover', changePixelColor);

gridSelect.addEventListener('click', selectGridSize);



