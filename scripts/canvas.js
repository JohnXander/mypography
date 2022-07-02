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
