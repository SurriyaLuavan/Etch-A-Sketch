const container = document.querySelector('.container');
const gridSelect = document.querySelector('.grid-size');
const eraser = document.querySelector('.eraser');
const sketch = document.querySelector('.sketch');
const reset = document.querySelector('.reset');


function gridCreate (number) {

for(let j = 1; j <= number; j++) {
    let container2 = document.createElement('div');
    container2.setAttribute('style', `display: flex; flex-direction: column;
    gap: 2px; flex: 1;`);
    container.append(container2);
    for (let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.id = i + j ;
        div.classList.add('pixel');
        div.setAttribute('style', `flex: 1; text-align: center; background-color: rgb(255,255,255)`)
        container2.append(div);
    }
    }
}

function resetPad (e) {
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    })
}

function changePixelColor(e) {
    if (e.target.classList.contains('pixel')) {
       let color =  e.target.style.backgroundColor;
        if (color === 'rgb(255, 255, 255)') {
            let r = Math.floor (Math.random() * 255);
            let g = Math.floor (Math.random() * 255);
            let b = Math.floor (Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            return;
        }
        let rgb = color.split("(")[1].split(")")[0].split(",").map(x => parseInt(x));
        let rgbNew = rgb.map(color => (color - (color * 0.2)));
        e.target.style.backgroundColor = `rgb(${rgbNew[0]}, ${rgbNew[1]}, ${rgbNew[2]})`;
    }
}

function selectGridSize(e) {
    let size = prompt(`Enter a grid size (max: 64): `);
    if(size === null){
        return;
    }
    while (size > 64) {
        size = prompt('Please enter a grid size less than 64!');
            if(size === null){
                return;
        }
    }
    if(container.hasChildNodes) {
    let children = container.children;
    Array.from(children).forEach (child => {child.remove();});
    gridCreate(size);
    }
}

function erasePixelColor(e) {
    if (e.target.classList.contains('pixel')) {
    e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

function modeSelect(e) {
    switch(currentMode) {
        case 'sketch':
            changePixelColor(e);
            break;
        case 'eraser': 
            erasePixelColor(e);
            break;
        default:
            changePixelColor(e);
    }
}

let currentMode = 'sketch';
gridCreate(16);
gridSelect.addEventListener('click', selectGridSize);

eraser.addEventListener('click', () => currentMode ='eraser');
sketch.addEventListener('click', () =>  currentMode ='sketch');

container.addEventListener('mouseover', modeSelect);

reset.addEventListener('click', resetPad);



