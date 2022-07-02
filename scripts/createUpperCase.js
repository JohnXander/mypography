const submitBtn = document.getElementById("submitBtn")
const finishedBtn = document.getElementById("finishedBtn")
const nonClickableLink = document.getElementById("nonClickableLink")
const letterContainer = document.getElementById("letterContainer")
letterContainer.style.height = "205px"

const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const container3 = document.getElementById("container3")
const container4 = document.getElementById("container4")

const upperCaseAlphabet = []
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
            space.style.color = "#F5F5F5"
            img.src = dataURL
            img.id = `upperCase${idx + 1}`

            if (num === 4) container1.appendChild(space)
            if (num === 14) container2.appendChild(space)
            if (num === 25) container3.appendChild(space)

            if (num <= 7) container1.appendChild(img)
            if (num > 7 && num <= 20) container2.appendChild(img)
            if (num > 20 && num <= 31) container3.appendChild(img)

            if (num >= 31) {
                finishedBtn.style.pointerEvents = "auto"
                nonClickableLink.style.pointerEvents = "auto"
                finishedBtn.style.backgroundColor = "#3D3D3D"
                finishedBtn.style.color = "#F5F5F5"
            }

            upperCaseAlphabet.push(dataURL)
            sessionStorage.setItem("upperAlpha", JSON.stringify(upperCaseAlphabet))
        }
    })
    context.clearRect(0, 0, canvas.width, canvas.height);
}
