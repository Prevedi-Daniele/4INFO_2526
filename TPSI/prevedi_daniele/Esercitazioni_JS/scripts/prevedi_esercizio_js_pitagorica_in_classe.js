function generaPitagorica(){
    let colonne = document.getElementById("colonne").value // Prende il primo oggetto nel DOM che ha quell'ID
    
    if(colonne < 4 || colonne > 12){
        alert("Inserisci un numero valido, tra 4 e 12.")
        return
    }

    for(let r = 0; r <= colonne; r++){
        for(let c = 0; c <= colonne; c++){
            console.log(r, c)
        }
    }
}