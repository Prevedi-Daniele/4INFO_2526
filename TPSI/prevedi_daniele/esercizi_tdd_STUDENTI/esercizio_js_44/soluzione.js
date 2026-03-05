export const ordina = (l) => {
    return l.sort((a, b) => {
        return b.title.toLowerCase() > a.title() ? 1 : a.title.toLowerCase() == b.title.toLowerCase() ? 0 : -1 // Sort: restituire un numero minore, maggiore, o uguale a 0.
    })
};

//export const ordina = (l) => {
//    return l.sort((a, b) => el2.title.localeCompare(el1.title))
//};