const is_prime = (n) => {
   return Array.from(Array(n).keys()).filter(e => e > 1).reduce((acc, e) => acc = acc && n % e != 0, true)
}
// Crea una array con 3 elementi, di cui prendo le chiavi (indici).
// Filtra gli elementi > 1 (toglie il primo, che è 0)
// Fa un reduce: accumulatore parte da True.
// Assegna: se accumulatore (true) e il modulo sono diversi da zero (true), restituisce true e va avanti
// Appena trova il primo falso, rimane falso per tutto il resto del "ciclo"

export const order = (l) => {
   return l.filter(e => is_prime(+e)).concat(l.filter(e => !is_prime(+e)))
};