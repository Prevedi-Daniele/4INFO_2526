let Automobile = function (modello, marca, anno, colore, posti) {
    (this.modello) = modello,
    (this.marca) = marca,
    (this.anno) = anno,
    (this.colore) = colore,
    (this.posti) = posti,
    (this.accensione = function (){
        console.log(`L'auto ${this.marca} ${this.modello} è accesa.`)
    }),
    (this.accelera = function (){
        console.log(`L'auto ${this.marca} ${this.modello} sta accelerando.`)
    }),
    (this.frena = function (){
        console.log(`L'auto ${this.marca} ${this.modello} sta frenando.`)
    })    
}

let auto = {
    auto1: new Automobile("500L", "FIAT", 2018, "Nero", 5),
    auto2: new Automobile("488 Pista", "Ferrari", 2022, "Nero", 2),
    auto3: new Automobile("Model S", "Tesla", 2016, "Bianco", 5),
    auto4: new Automobile("Panda", "FIAT", 2021, "Grigio", 4),
    auto5: new Automobile("Roadster", "Jeep", 2017, "Nero", 5)
}

for (vettura in auto) {
    auto[vettura].accensione()
    auto[vettura].accelera()
    auto[vettura].frena()
}