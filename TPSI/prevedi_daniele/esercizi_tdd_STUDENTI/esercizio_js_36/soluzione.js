export const tronca_parola = (s, pos) => {
   s = s.split(" ")

   strOut = ""
   for (let i = 0; i < pos; i++) {
      strOut = strOut.concat(s[i], " ")
   }
   
   return strOut.trim()
};
