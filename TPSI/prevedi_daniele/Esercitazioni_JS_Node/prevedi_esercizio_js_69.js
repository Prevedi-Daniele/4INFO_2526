class Quadrato {
    constructor(lato){
        this.lato = lato
    }

    set lato(parametro){
        this._lato = parametro
    }

    get lato(){
        return this._lato
    }

    get area(){
        return this._lato ** 2
    }

    get perimetro(){
        return this._lato * 4
    }
}

(function(){
    let quadrato1 = new Quadrato(5)
    console.log(quadrato1.perimetro)
    console.log(quadrato1.area)
})()