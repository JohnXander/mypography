const keyboard = document.getElementById("keyboard")
const notepad = document.getElementById("notepad")

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