const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

for(let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-square");
    container.appendChild(box);
}

const squares = document.querySelectorAll(".grid-square");
squares.forEach((square) => {
    square.addEventListener("mouseover", func, false);
    square.addEventListener("mouseout", func1, false);
})
function func() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function func1() {
    if(Number(this.style.opacity) < 1) {
        this.style.opacity = `${Number(this.style.opacity) + 0.1}`;
    }
}

const button = document.createElement("button");
button.textContent = "Create your own!";
document.body.appendChild(button);
button.addEventListener("click", sizing);

function sizing() {
    let size;
    do {
        size = prompt("Enter an integer less than 100 of how long the rows should be: ");
    }
    while(size > 100 || size < 0);

    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.remove();
    });

    for(let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("grid-square");
        container.appendChild(box);
    }

    let length = 30 * size;
    container.style.width = length + "px";
    container.style.height = length + "px";

    const newSquares = document.querySelectorAll(".grid-square");
    newSquares.forEach((square) => {
        square.addEventListener("mouseover", func, false);
        square.addEventListener("mouseout", func1, false);
})
}