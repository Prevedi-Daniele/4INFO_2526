function calcolaDifferenzeOrari(orario1, orario2, orario3) {
    let msOrario1 = (orario1.ore * 3600 + orario1.minuti * 60 + orario1.secondi) * 1000
    let msOrario2 = (orario2.ore * 3600 + orario2.minuti * 60 + orario2.secondi) * 1000
    let msOrario3 = (orario3.ore * 3600 + orario3.minuti * 60 + orario3.secondi) * 1000

    if (msOrario1 <= msOrario2 && msOrario1 <= msOrario3) {
        return orario1
    } else if (msOrario2 <= msOrario1 && msOrario2 <= msOrario3) {
        return orario2
    } else {
        return orario3
    }
}

function main() {
    let orario1 = {
        ore: 10, 
        minuti: 30, 
        secondi: 45 
    }
    let orario2 = {
        ore: 12, 
        minuti: 15, 
        secondi: 30 
    }
    let orario3 = {
        ore: 8, 
        minuti: 0, 
        secondi: 0 
    }
    let risultato1 = calcolaDifferenzeOrari(orario1, orario2, orario3)
    console.log(`L'orario minore è ${risultato1.ore} ore, ${risultato1.minuti} minuti, ${risultato1.secondi} secondi`)

    let orario4 = {
        ore: 14, 
        minuti: 45, 
        secondi: 20 
    }
    let orario5 = {
        ore: 16, 
        minuti: 30, 
        secondi: 15 
    }
    let orario6 = {
        ore: 10, 
        minuti: 20, 
        secondi: 50 
    }
    let risultato2 = calcolaDifferenzeOrari(orario4, orario5, orario6)
    console.log(`L'orario minore è ${risultato2.ore} ore, ${risultato2.minuti} minuti, ${risultato2.secondi} secondi`)
}

main()