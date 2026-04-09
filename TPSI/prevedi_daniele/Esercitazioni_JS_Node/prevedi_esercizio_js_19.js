function stampaDettagliOggetto(oggetto) {
    for (let chiave in oggetto) {
        let valore = oggetto[chiave]
        let tipo = typeof valore
        console.log(`Nome: ${chiave}, tipo: ${tipo}, valore: ${valore}`)
    }
}

function main() {
    let persona = {
        nome: "Daniele",
        cognome: "Prevedi",
        eta: 17,
        classe: "4° INFO",
        scuola: "Istituto Agnelli",
    }

    stampaDettagliOggetto(persona)

    let auto = {
        modello: "500L",
        marca: "Fiat",
        anno: 2018,
        colore: "Nero",
        posti: 5
    }

    stampaDettagliOggetto(auto)
}

main()