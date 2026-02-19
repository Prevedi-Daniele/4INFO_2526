export const swap = (l, n, m) => {
    let out = l.splice(m,0,n)
    return out
};
