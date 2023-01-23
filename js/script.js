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
        div.setAttribute('style', `flex: 1; border: 2px solid; text-align: center; background-color: rgb(255,255,255)`)
        container2.append(div);
    }
    }
}

function changePixelColor(e) {
    if (e.target.classList.contains('pixel')) {
       let color =  e.target.style.backgroundColor;
    //let styles = getComputedStyle(e.target);
        if (color === 'rgb(255, 255, 255)') {
            let r = Math.floor (Math.random() * 255);
            let g = Math.floor (Math.random() * 255);
            let b = Math.floor (Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            return;
        }
        let rgb = color.split("(")[1].split(")")[0].split(",").map(x => parseInt(x));
        let rgbNew = rgb.map(color => (color - (color * 0.15)));
        e.target.style.backgroundColor = `rgb(${rgbNew[0]}, ${rgbNew[1]}, ${rgbNew[2]})`;
    }
}

function selectGridSize(e) {
    let size = prompt(`Enter a grid size (max: 50): `);
    if(size === null){
        return;
    }
    while (size > 50) {
        size = prompt('Please enter a grid size less than 50!');
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

gridCreate(15);

container.addEventListener('mouseover', changePixelColor);

gridSelect.addEventListener('click', selectGridSize);



