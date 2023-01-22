let container = document.querySelector('.container');

for(let j = 1; j <= 16; j++) {
    let container2 = document.createElement('div');
    container2.setAttribute('style', `display: flex; flex-direction: column;
    gap: 10px;`);
    container.append(container2);
    for (let i = 1; i <= 16; i++) {
        let div = document.createElement('div');
        div.id = 'div' + i + j ;
        div.textContent = i + j;
        div.setAttribute('style', `flex: 1; border: 2px solid; text-align: center`)
        container2.append(div);
    }
}

//console.log(container.childElementCount);
console.log(container.firstElementChild.childNodes);