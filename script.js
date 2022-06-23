
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const submitBtn = document.getElementById("submitBtn")

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")
const img7 = document.getElementById("img7")
const img8 = document.getElementById("img8")
const img9 = document.getElementById("img9")
const img10 = document.getElementById("img10")
const img11 = document.getElementById("img11")
const img12 = document.getElementById("img12")
const img13 = document.getElementById("img13")
const img14 = document.getElementById("img14")
const img15 = document.getElementById("img15")
const img16 = document.getElementById("img16")
const img17 = document.getElementById("img17")
const img18 = document.getElementById("img18")
const img19 = document.getElementById("img19")
const img20 = document.getElementById("img20")
const img21 = document.getElementById("img21")
const img22 = document.getElementById("img22")
const img23 = document.getElementById("img23")
const img24 = document.getElementById("img24")
const img25 = document.getElementById("img25")
const img26 = document.getElementById("img26")
const img27 = document.getElementById("img27")
const img28 = document.getElementById("img28")
const img29 = document.getElementById("img29")
const img30 = document.getElementById("img30")
const img31 = document.getElementById("img31")
const img32 = document.getElementById("img32")
const img33 = document.getElementById("img33")
const img34 = document.getElementById("img34")
const img35 = document.getElementById("img35")

const row1 = [img1, img2, img3, img4, img5, img6, img7, img8]
const row2 = [img9, img10, img11, img12, img13, img14, img15, img16]
const row3 = [img17, img18, img19, img20, img21, img22, img23, img24, img25]
const row4 = [img26, img27, img28, img29, img30, img31, img32, img33, img34, img35]

const imgArr = row1.concat(row2).concat(row3).concat(row4)

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

let num = 0

submitBtn.addEventListener("click", () => {
    const dataURI = canvas.toDataURL()
    num++
    imgArr.map((item, idx) => {
        if (num === idx + 1) item.src = dataURI
    })
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})