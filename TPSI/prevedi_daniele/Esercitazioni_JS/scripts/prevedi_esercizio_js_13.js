function sommaTuttiNumeri(max){
    if (typeof(max) == String){
        max = Number(max)
    }

    let somma = 0

    for (let i = 0; i < max; i++) {
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