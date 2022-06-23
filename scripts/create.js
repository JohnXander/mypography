//The five boxing wizards jump quickly

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let btnIsPressed = false;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (event) => {
    drawOnCanvas("mousedown", event)
});

canvas.addEventListener("mouseup", () => {
    drawOnCanvas("mouseup")
})

const drawOnCanvas = (mouseAction, event) => {
    switch (mouseAction) {
        case "mousedown":
            btnIsPressed = true;
            x = event.offsetX;
            y = event.offsetY;
            break;
        case "mouseup":
            btnIsPressed = false;
            x = undefined;
            y = undefined;
            break;
    }
}

canvas.addEventListener("mousemove", (e) => {
    if (btnIsPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
    
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

const drawCircle = (x, y) => {
    context.beginPath();
    context.arc(x, y, 8, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();
};

const drawLine = (x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = "black";
    context.lineWidth = 8 * 2;
    context.stroke();
};

const submitBtn = document.getElementById("submitBtn")

const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const container3 = document.getElementById("container3")
const container4 = document.getElementById("container4")

const lowerCaseAlphabet = []
let num = 0

submitBtn.addEventListener("click", () => {
    printLetterToBoard()
})

const printLetterToBoard = () => {
    const iterableArr = Array(35).fill(0)
    const dataURL = canvas.toDataURL()
    num++
    iterableArr.map((_, idx) => {
        if (num === idx + 1) {
            const img = document.createElement("img")
            const space = document.createElement("span")
            space.innerHTML = "___"
            img.src = dataURL
            img.id = `lowerCase${idx + 1}`

            if (num === 4) container1.appendChild(space)
            if (num === 14) container2.appendChild(space)
            if (num === 22) container3.appendChild(space)
            if (num === 29 || num === 33) container4.appendChild(space)

            if (num <= 8) container1.appendChild(img)
            if (num > 8 && num <= 16) container2.appendChild(img)
            if (num > 16 && num <= 25) container3.appendChild(img)
            if (num > 25) container4.appendChild(img)

            lowerCaseAlphabet.push(img)
        }
    })
    context.clearRect(0, 0, canvas.width, canvas.height);
}