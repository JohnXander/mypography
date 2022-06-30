const lowerCaseAlphabet = JSON.parse(sessionStorage.getItem("lowerAlpha"))
const upperCaseAlphabet = JSON.parse(sessionStorage.getItem("upperAlpha"))
const numbers = JSON.parse(sessionStorage.getItem("numbers"))
const punc = JSON.parse(sessionStorage.getItem("punc"))
lowerCaseAlphabet.push("../img/space.jpg")
upperCaseAlphabet.push("../img/space.jpg")
numbers.push("../img/space.jpg")
punc.push("../img/space.jpg")

const keyboard = document.getElementById("keyboard")
const notepad = document.getElementById("notepad")

const letterToImg = {
    a: lowerCaseAlphabet[29],
    b: lowerCaseAlphabet[8],
    c: lowerCaseAlphabet[6],
    d: lowerCaseAlphabet[32],
    e: lowerCaseAlphabet[2],
    f: lowerCaseAlphabet[13],
    g: lowerCaseAlphabet[34],
    h: lowerCaseAlphabet[1],
    i: lowerCaseAlphabet[5],
    j: lowerCaseAlphabet[16],
    k: lowerCaseAlphabet[7],
    l: lowerCaseAlphabet[28],
    m: lowerCaseAlphabet[18],
    n: lowerCaseAlphabet[12],
    o: lowerCaseAlphabet[10],
    p: lowerCaseAlphabet[19],
    q: lowerCaseAlphabet[3],
    r: lowerCaseAlphabet[9],
    s: lowerCaseAlphabet[20],
    t: lowerCaseAlphabet[0],
    u: lowerCaseAlphabet[4],
    v: lowerCaseAlphabet[22],
    w: lowerCaseAlphabet[11],
    x: lowerCaseAlphabet[15],
    y: lowerCaseAlphabet[31],
    z: lowerCaseAlphabet[30],
    " ": lowerCaseAlphabet[35],
    T: upperCaseAlphabet[0],
    H: upperCaseAlphabet[1],
    E: upperCaseAlphabet[2],
    F: upperCaseAlphabet[3],
    I: upperCaseAlphabet[4],
    V: upperCaseAlphabet[5],
    B: upperCaseAlphabet[7],
    O: upperCaseAlphabet[8],
    X: upperCaseAlphabet[9],
    N: upperCaseAlphabet[11],
    G: upperCaseAlphabet[12],
    W: upperCaseAlphabet[13],
    Z: upperCaseAlphabet[15],
    A: upperCaseAlphabet[16],
    R: upperCaseAlphabet[17],
    D: upperCaseAlphabet[18],
    S: upperCaseAlphabet[19],
    J: upperCaseAlphabet[20],
    U: upperCaseAlphabet[21],
    M: upperCaseAlphabet[22],
    P: upperCaseAlphabet[23],
    Q: upperCaseAlphabet[24],
    C: upperCaseAlphabet[27],
    K: upperCaseAlphabet[28],
    L: upperCaseAlphabet[29],
    Y: upperCaseAlphabet[30],
    0: numbers[0],
    1: numbers[1],
    2: numbers[2],
    8: numbers[3],
    5: numbers[4],
    7: numbers[5],
    6: numbers[6],
    4: numbers[7],
    3: numbers[8],
    9: numbers[9],
    "?": punc[0],
    '"': punc[1],
    "-": punc[2],
    ":": punc[3],
    "(": punc[4],
    ",": punc[5],
    ".": punc[6],
    ")": punc[7],
    ";": punc[8],
    "_": punc[9],
    "'": punc[10],
    "!": punc[11]
}

keyboard.addEventListener("keydown", (e) => {
    changeLetterToImg(e)
})

const typedLetters = []
const letterDisplay = document.getElementById("letterDisplay")

const finishedBtn = document.getElementById("finishedBtn")
const nonClickableLink = document.getElementById("nonClickableLink")

const validChars = Object.keys(letterToImg)

const changeLetterToImg = (event) => {
    if (event.key === "CapsLock" || event.key === "Shift") {
    } else if (event.key === "Backspace") {
        letterDisplay.removeChild(letterDisplay.lastChild)
        typedLetters.pop()
    } else if (!validChars.includes(event.key)) {
        alert("Cannot use that key yet")
    } else {
        typedLetters.push(letterToImg[event.key])
        if (typedLetters.length > 240) {
            alert("Maximum Capacity")
        } else {
            displayLetters()
        }
    }
}

const displayLetters = () => {
    letterDisplay.innerHTML = ""
    typedLetters.map(url => {
        const letterImg = document.createElement("img")
        letterImg.style.width = "2rem"
        letterImg.src = url
        letterDisplay.appendChild(letterImg)   
    })
    
    finishedBtn.style.pointerEvents = "auto"
    nonClickableLink.style.pointerEvents = "auto"
    finishedBtn.style.backgroundColor = "#3D3D3D"
    finishedBtn.style.color = "#F5F5F5"
}
