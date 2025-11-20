function generaPitagorica(){
    let colonne = document.getElementById("colonne").value  // Prende il primo oggetto nel DOM che ha quell'ID
    let tabella = document.getElementById("pitagorica")     // Prendo la tabella già esistente

    if(colonne < 4 || colonne > 12){
        alert("Inserisci un numero valido, tra 4 e 12.")
        return
    }

    for(let r = 0; r <= colonne; r++){
        let riga = document.createElement("tr")
        tabella.append(riga)                                // Aggiungo la riga alla tabella
        for(let c = 0; c <= colonne; c++){
            let cella = document.createElement("td")        // Crea un nuovo tag HTML che passo per stringa
            if(r != 0 || c != 0){
                cella.innerText = r * c
                if(r == 0){
                    cella.innerText = c
                    cella.classList.add("header")
                }
                if(c == 0){
                    cella.innerText = r
                    cella.classList.add("header")
                }
            }

            riga.append(cella)                              // Aggiungo la cella alla riga

        }
    }
}