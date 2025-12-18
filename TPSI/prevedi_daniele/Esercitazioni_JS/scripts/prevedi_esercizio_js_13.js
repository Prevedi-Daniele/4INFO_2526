function sommaTuttiNumeri(n){
    if (typeof(n) == String){
        n = Number(n)
    }

    let somma = 0

    for (let i = 0; i < n; i++) {
        somma = somma + i
    }

    return somma
}

function main(){
    console.log(sommaTuttiNumeri(10))
    console.log(sommaTuttiNumeri("30"))
    console.log(sommaTuttiNumeri(2))
}

main()