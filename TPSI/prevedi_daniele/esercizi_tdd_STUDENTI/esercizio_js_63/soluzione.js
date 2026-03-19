export const unique_characters = (str) => {
    return [...new Set(str)].join("")

    /*
    let uniq = new Set(str.split(""))

    let stringa = Array.from(uniq).join("") // Con join passo da array a stringa

    return stringa
    */
}