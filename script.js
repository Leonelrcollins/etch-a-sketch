const container = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

const gridSize = 960;
const defaultCells = 16;

function createGrid(size) {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");

        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black";
        });

        container.appendChild(cell);
    }
}

function resetGrid() {
    let newSize = prompt("Ingrese el número de cuadrados por lado (máximo 100):", defaultCells);
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Por favor, ingrese un número válido entre 1 y 100.");
        return;
    }

    createGrid(newSize);
}

createGrid(defaultCells);

resetButton.addEventListener("click", resetGrid);
