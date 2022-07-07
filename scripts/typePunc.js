const punc = JSON.parse(sessionStorage.getItem("punc"))
punc.push("../img/space.jpg")

letterToImgCopy = letterToImg

letterToImg = {
    ...letterToImgCopy,
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
