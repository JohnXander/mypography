
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const submitBtn = document.getElementById("submitBtn")
const imgConverted = document.getElementById("imgConverted")

let isPressed = false;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
    
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8 * 2;
    ctx.stroke();
};

submitBtn.addEventListener("click", () => {
    const dataURI = canvas.toDataURL()
    imgConverted.src = dataURI
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

