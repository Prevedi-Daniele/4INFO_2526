let Animale = function(specie, famiglia, colore) {
    (this.specie = specie),
    (this.famiglia = famiglia),
    (this.colore = colore),
    (this.stampaSpecie = function (){
        console.log(`L'animale è un ${this.specie}`)
    }),
    (this.stampaFamiglia = function (){
        console.log(`L'animale è della famiglia ${this.famiglia}`)
    }),
    (this.enumera = function (){
        for (chiave in this){
            console.log(`${chiave}`)
        }
    })
}

let Automobile = function (modello, marca, anno) {
    (this.modello) = modello,
    (this.marca) = marca,
    (this.anno) = anno,
    (this.accensione = function (){
        console.log(`L'auto ${this.marca} ${this.modello} è accesa.`)
    }),
    (this.accelera = function (){
        console.log(`L'auto ${this.marca} ${this.modello} sta accelerando.`)
    }),
    (this.enumera = function (){
        for (chiave in this){
            console.log(`${chiave}`)
        }
    })
}

let Poligono = function (base, perimetro, area) {
    (this.base) = base,
    (this.perimetro) = perimetro,
    (this.area) = area,
    (this.crea = function (){
        console.log(`Il poligono è stato creato`)
    }),
    (this.distruggi = function (){
        console.log(`Il poligono è stato distrutto`)
    }),
    (this.enumera = function (){
        for (chiave in this){
            console.log(`${chiave}`)
        }
    })
}


let animale1 = new Animale("Caretta Caretta", "Rettile", "Verde")
let animale2 = new Animale("Homo Sapiens Sapiens", "Mammiferi", "Rosa")
animale1.enumera()
animale2.enumera()

let automobile1 = new Automobile("500L", "FIAT", "2018")
let automobile2 = new Automobile("488 Pista", "Ferrari", "2016")
automobile1.enumera()
automobile2.enumera()

let poligono1 = new Poligono(20, 100, 80)
let poligono2 = new Poligono(5, 30, 20)
poligono1.enumera()
poligono2.enumera()