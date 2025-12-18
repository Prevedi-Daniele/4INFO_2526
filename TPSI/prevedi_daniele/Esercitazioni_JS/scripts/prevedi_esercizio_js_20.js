let Automobile = function (persone, velocita, rapportoVelocita, accesa){
    (this.persone = persone),
    (this.velocita = velocita),
    (this.rapportoVelocita = rapportoVelocita),
    (this.accesa = accesa),
    
    (this.visualizzaStatoVettura = function (){
        console.log(`La vettura ha a bordo ${this.persone} passeggeri.`)
        console.log(`La vettura sta viaggiando a ${this.velocita} km/h.`)
        console.log(`La vettura è impostata sulla ${this.rapportoVelocita}° marcia.`)
        if (this.accesa == true){
            console.log(`La vettura è accesa.`)
        }
        else{
            console.log(`La vettura è spenta.`)
        }
    }),


    (this.cambiaNumeroPasseggeri = function (numeroPasseggeriAggiornato){
        if (this.velocita > 0){
            console.log("Non è possibile modificare il numero di passeggeri se la vettura è in movimento.")
            return
        }

        if (numeroPasseggeriAggiornato < 0 || numeroPasseggeriAggiornato > 5){
            console.log(`Impossibile eccedere i limiti di passeggeri della vettura (0 e 5) in negativo o in positivo.`)
            return
        }

        this.persone = numeroPasseggeriAggiornato
        console.log(`Il numero di persone nella vettura è stato modificato a ${this.persone}.`)
    }),


    (this.cambiaVelocitaVettura = function (velocitaVetturaAggiornata){
        if (velocitaVetturaAggiornata < 0 || velocitaVetturaAggiornata > 180){
            console.log(`Impossibile eccedere i limiti di velocità della vettura (0km/h e 180km/h) in negativo o in positivo.`)
            return
        }

        if (this.velocita - velocitaVetturaAggiornata > 30 || this.velocita - velocitaVetturaAggiornata < -30){
            console.log(`Impossibile modificare la velocità attuale di 30km/h in positivo o in negativo.`)
            return
        }

        this.velocita = velocitaVetturaAggiornata
        console.log(`La velocità della vettura è stata modificata a ${this.velocita}.`)
    }),

    
    (this.aumentaMarciaVettura = function (){

    })
}

main()