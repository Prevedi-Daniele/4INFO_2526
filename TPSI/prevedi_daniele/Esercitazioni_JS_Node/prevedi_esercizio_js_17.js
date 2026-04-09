function restituisciMaggiore(val1, val2) {
    return val1 > val2 ? val1 : val2
}

function main() {
    console.log(restituisciMaggiore(5, 10))
    console.log(restituisciMaggiore(0, 15))
    console.log(restituisciMaggiore(4, -3))    
}

main()