const gridContainer = document.querySelector('#container');
const sizeButton = document.querySelector('#size-button');
const colorPicker = document.querySelector('#color-picker');
const randomButton = document.querySelector('#random-button');
const resetButton = document.querySelector('#reset-button');

let isDrawing = false;
let currentColor = colorPicker.value;
let isRandomColor = false;

document.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const createGrid = (size) => {
    gridContainer.innerHTML = "";
    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap";
    gridContainer.style.width = "500px";
    gridContainer.style.height = "500px";

    const cellSize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.boxSizing = "border-box";
        cell.style.backgroundColor = "white";

        cell.addEventListener("mouseenter", () => {
            if (isDrawing) {
                cell.style.backgroundColor = isRandomColor ? getRandomColor() : currentColor;
            }
        });

        gridContainer.appendChild(cell);
    }
};

createGrid(16);

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
    isRandomColor = false;
    randomButton.style.backgroundColor = "";
});

randomButton.addEventListener("click", () => {
    isRandomColor = !isRandomColor;
    randomButton.style.backgroundColor = isRandomColor ? "var(--brand-color)" : ""; 
});

sizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size between 1 and 100:");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    createGrid(newSize);
});

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });

    isRandomColor = false;
    randomButton.style.backgroundColor = "";
});