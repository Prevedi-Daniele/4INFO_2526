export const capitalize_all = (str) => {
   let splitted = str.split(" ")

   let ret = ""

   for (let s of splitted){
      ret = ret.concat(s.charAt(0).toUpperCase(), s.substring(1).concat(" "))
   }

   return ret.trim()
}