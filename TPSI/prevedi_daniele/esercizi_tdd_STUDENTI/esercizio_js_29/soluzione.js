export const invert_case = (str) => {
   str = str.split("")
   
   for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
         str[i] = str[i].toLowerCase()
      }
      else {
         str[i] = str[i].toUpperCase()
      }
   }

   let strOut = ""

   for (let char of str) {
      strOut = strOut.concat(char)
   }

   return strOut
}
