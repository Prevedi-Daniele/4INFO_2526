function restituisciMaggiore(val1, val2, val3) {
    return (val1 > val2 ? (val1 > val3 ? val1 : val3) : (val2 > val3 ? val2 : val3))
}

function main() {
    console.log(restituisciMaggiore(5, 10, 3))
    console.log(restituisciMaggiore(7, 2, 9))
    console.log(restituisciMaggiore(1, 1, 1))
}

main()