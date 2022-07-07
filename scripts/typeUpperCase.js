const upperCaseAlphabet = JSON.parse(sessionStorage.getItem("upperAlpha"))
upperCaseAlphabet.push("../img/space.jpg")

let letterToImgCopy = letterToImg

letterToImg = {
    ...letterToImgCopy,
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
    Y: upperCaseAlphabet[30]
}
