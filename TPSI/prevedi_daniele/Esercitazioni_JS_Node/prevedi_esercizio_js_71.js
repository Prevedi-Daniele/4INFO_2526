class Poligono {
    constructor(lunghezzaLato, numeroLati){
        this.lunghezzaLato = lunghezzaLato
        this.numeroLati = numeroLati
    }

    perimetro(){
        return this.lunghezzaLato * this.numeroLati
    }

    stampa(){
        console.log(`Perimetro: ${this.perimetro()} cm`)
        console.log(`Area: ${this.area()} cm²`)
    }
}

class Triangolo extends Poligono {
    constructor(lato){
        super(lato, 3)
    }

    area(){
        return (Math.pow(this.lunghezzaLato, 2) * Math.sqrt(3)) / 4
    }
}

class Quadrato extends Poligono {
    constructor(lato){ 
        super(lato, 4)
    }
    area(){
        return Math.pow(this.lunghezzaLato, 2)
    }
}

class Pentagono extends Poligono {
    constructor(lato){ 
        super(lato, 5) 
    }
    area(){
        return Math.pow(this.lunghezzaLato, 2) * 1.720
    }
}

class Esagono extends Poligono {
    constructor(lato){ 
        super(lato, 6) 
    }
    area(){
        return Math.pow(this.lunghezzaLato, 2) * 2.598
    }
}

class Ettagono extends Poligono {
    constructor(lato){ 
        super(lato, 7) 
    }
    area(){
        return Math.pow(this.lunghezzaLato, 2) * 3.634
    }
}

class Ottagono extends Poligono {
    constructor(lato){ 
        super(lato, 8) 
    }
    area(){
        return Math.pow(this.lunghezzaLato, 2) * 4.828
    }
}

let poligoni = [
    new Triangolo(15),
    new Quadrato(10),
    new Pentagono(21),
    new Esagono(18),
    new Ettagono(9),
    new Ottagono(12)
]

poligoni.forEach(poligono => {
    poligono.stampa()
})
