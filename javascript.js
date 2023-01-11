const grid = document.querySelector('#grid');
let cells = grid.children;
grid.classList.add('grid');

let slider = document.getElementById("myRange");
let gridSize = document.querySelector(".output");
gridSize.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
    gridSize.innerHTML = slider.value + " x " + slider.value;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', createGrid)

function createGrid() {
    reset();
    for (let i = 0; i < slider.value*slider.value; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = 350 / slider.value + "px";
        cell.style.width = 350 / slider.value + "px";
        grid.style.gridTemplateColumns = "repeat(" + slider.value + ", " + 350 / slider.value + "px)";
        grid.style.gridTemplateRows = "repeat(" + slider.value + ", " + 350 / slider.value + "px)";
        grid.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "#957dad";
        })    
    }
}

slider.addEventListener("change", function () {
    reset();
    for (let i = 0; i < slider.value*slider.value; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = 350 / slider.value + "px";
        cell.style.width = 350 / slider.value + "px";
        grid.style.gridTemplateColumns = "repeat(" + slider.value + ", " + 350 / slider.value + "px)";
        grid.style.gridTemplateRows = "repeat(" + slider.value + ", " + 350 / slider.value + "px)";
        grid.appendChild(cell);
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "#957dad";
        })    
    }
})

function reset() {
    grid.innerHTML = '';
}