function generaPitagorica(){
    let colonne = document.getElementById("colonne").value // Prende il primo oggetto nel DOM che ha quell'ID
    
    if(colonne < 4 || colonne > 12){
        alert("Inserisci un numero valido, tra 4 e 12.")
        return
    }
    else{
        console.log("Numero valido")
    }
}