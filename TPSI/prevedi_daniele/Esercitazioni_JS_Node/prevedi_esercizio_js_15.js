function successioneFibonacci(val) {
    val = Number(val)

    let numeroPrecedente = 0, numeroAttuale = 1
    for (let i = 2; i <= val; i++) {
        let prossimoNumero = numeroPrecedente + numeroAttuale
        numeroPrecedente = numeroAttuale
        numeroAttuale = prossimoNumero
    }

    return numeroAttuale
}

function main() {
    console.log(`${successioneFibonacci(0)}`)
    console.log(`${successioneFibonacci(5)}`)
    console.log(`${successioneFibonacci("10")}`)
    console.log(`${successioneFibonacci(15)}`)
    console.log(`${successioneFibonacci("7")}`)
}

main()