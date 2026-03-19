export function is_anagram(arr) {
    let temp = new Map()

    for (let word of arr){
        let sorted = word.toLowerCase().split("").sort().join("")
        temp.set(sorted, word)
    }
    return Array.from(temp.values())
}