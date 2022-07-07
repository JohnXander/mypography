const numbers = JSON.parse(sessionStorage.getItem("numbers"))
numbers.push("../img/space.jpg")

letterToImgCopy = letterToImg

letterToImg = {
    ...letterToImgCopy,
    0: numbers[0],
    1: numbers[1],
    2: numbers[2],
    8: numbers[3],
    5: numbers[4],
    7: numbers[5],
    6: numbers[6],
    4: numbers[7],
    3: numbers[8],
    9: numbers[9]
}
