// I'm just testing some things. This is not serious code

const keyboard = document.getElementById("keyboard")
const notepad = document.getElementById("notepad")

const c = document.createElement("img")
c.style.width = "100px"
c.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
const d = document.createElement("img")
d.style.width = "100px"
d.src = "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"

keyboard.addEventListener("keydown", (e) => {
    if (e.key === "c") {
        notepad.appendChild(c)
    }
    if (e.key === "d") {
        notepad.appendChild(d)
    }
})

// Press C to get an image of a cat
// Press D to get an of a dog
