export const no_copies = (array) => {
   return array.filter((a, b) => array.indexOf(a) === b) 
   // Filter tiene quelli che rispettano la funzione. IndexOf restituisce il PRIMO elemento che trova.
}