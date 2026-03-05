export const map_arr = (l, n) => {
    return l.map((elemento, indice) => {+elemento % n == 0 && +elemento != 0? 0 : elemento}) // Map scandisce l'array, per ogni elemento lo sostituisce con il risultato di quella funzione.
};