const SQUARE = {
    width: 8,
    height: 8,
};

const MAX_WIDTH = 650;
const MAX_HEIGHT = 450;

function calculateGridSize(width, height) {
    const cellsPerRow = Math.floor(width / SQUARE.width);

    const cellsPerColumn = Math.floor(height / SQUARE.height);

    return cellsPerRow * cellsPerColumn;
}

function showGrid(width, height) {
    const totalCells = calculateGridSize(width, height);
    const mainContainer = document.getElementById("main-container");
    mainContainer.style.setProperty("--cell-width", `${SQUARE.width}px`);
    mainContainer.style.setProperty("--cell-height", `${SQUARE.height}px`);

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        mainContainer.appendChild(cell);

        cell.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
                cell.classList.add("drawn");
            }
        });
    }
}

const ERASE = document.getElementById("erase");

ERASE.addEventListener("click", () => clearGrid());

function clearGrid() {
    let cells = document.getElementsByClassName("cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("drawn");
    }
}

showGrid(MAX_WIDTH, MAX_HEIGHT);
