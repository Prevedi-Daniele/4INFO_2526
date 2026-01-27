export const upper_case = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            let temp = str.charCodeAt(i) - 32
            let hex = temp.toString(16).toUpperCase()
            str[i] = "\u{hex}";
        }
    }
    return str;
}

