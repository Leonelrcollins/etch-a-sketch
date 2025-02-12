const container = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const colorPicker = document.querySelector("#color-picker");
const eraserButton = document.querySelector("#eraser-button");

let isDrawing = false;
let currentColor = colorPicker.value;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});

const createGrid = (size) => {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.backgroundColor = "white";

        cell.addEventListener("mouseenter", () => {
            if (isDrawing) {
                cell.style.backgroundColor = currentColor;
            }
        });

        container.appendChild(cell);
    }
};

createGrid(16);
