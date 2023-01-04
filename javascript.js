const grid = document.querySelector('#grid');
const button = document.getElementById("btn");

button.addEventListener("click", createGrid);

for (let i = 0; i < 16*16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = "50px";
    cell.style.width = "50px";
    grid.style.gridTemplateColumns = "repeat(16, 50px)";
    grid.style.gridTemplateRows = "repeat(16, 50px)";
    grid.appendChild(cell);
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = "red";
    })    
}

function reset() {
    grid.innerHTML = '';
  }

function createGrid() {
    let input = prompt("How many squares per side? (Maximum 100)", "16");
    let size = parseInt(input);
    if (size > 0 && size < 101) {
        reset();
        for (let i = 0; i < size*size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = 800 / size + "px";
            cell.style.width = 800 / size + "px";
            grid.style.gridTemplateColumns = "repeat(" + size + ", " + 800 / size + "px)";
            grid.style.gridTemplateRows = "repeat(" + size + ", " + 800 / size + "px)";
            grid.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "red";
            })    
        }
    } else {
        alert("Please enter a number between 1 and 100");
    }

}






