export const swap = (l, n, m) => {
    let x = l[n]
    l.splice(n, 1) // Toglie l'elemento alla posizione n
    l.splice(m >= 0 ? m : m+1, 0, l[n])

    return l
};
