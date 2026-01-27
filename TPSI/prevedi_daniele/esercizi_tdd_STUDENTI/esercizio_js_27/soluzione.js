export const capitalize_all = (str) => {
   str = str.split(" ")
   for (let i = 0; i < str.length; i++) {
      str[i][0] = str[i].charAt(0).toUpperCase()
   }

   let strOut = ""

   for (const parola of str) {
      if (str.indexOf(parola) != str.length - 1) {
         strOut = strOut.concat(parola, " ")
      }
      else {         
         strOut = strOut.concat(parola)
      }
      
   }
   return strOut
}

