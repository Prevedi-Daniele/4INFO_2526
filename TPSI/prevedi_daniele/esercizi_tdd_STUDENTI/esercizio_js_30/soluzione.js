export const tronca = (str, l) => {
    if (str.length <= l) {
        return str
    }

    let strOut = ""
    strOut = strOut.concat(str.slice(0, l), "...")

    return strOut
}
