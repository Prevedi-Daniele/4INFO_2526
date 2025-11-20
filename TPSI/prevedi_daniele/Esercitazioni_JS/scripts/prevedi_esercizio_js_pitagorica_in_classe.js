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
                cella.innerText = r * c                     // Se è una cella "normale"
                
                if(r == 0){                                 // Se è l'header della colonna
                    cella.innerText = c
                    cella.classList.add("header")
                }
                
                if(c == 0){                                 // Se è l'header della riga
                    cella.innerText = r
                    cella.classList.add("header")
                }
            }

            riga.append(cella)                              // Aggiungo la cella alla riga

        }
    }
}

function calcolaMultipli(){
    let numero = document.getElementById("numero").value
    let tabella = document.getElementById("pitagorica")
    let righe = tabella.children

    if(numero <= 0){
        alert("Inserisci un numero positivo.")
        return
    }

    for(let r = 1; r < righe.length; r++){
        let riga = righe[r]
        let celle = riga.children
        for(let c = 1; c < celle.length; c++){
            let cella = celle[c]
            let cellaValue = Number(cella.innerText)

            if(cellaValue % numero == 0){
                cella.classList.add("multiplo")
            }
        }
    }
}

function calcolaDivisori(){
    let numero = document.getElementById("numero").value
    console.log(numero)
}