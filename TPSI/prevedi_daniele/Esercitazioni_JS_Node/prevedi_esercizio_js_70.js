class Calcolatrice {
    constructor (){
        this.risultato = 0
    }

    add(val){
        this.risultato = this.risultato + val
        return this
    }

    sub(val){
        this.risultato = this.risultato - val
        return this
    }

    mul(val){
        this.risultato = this.risultato * val
        return this
    }

    div(val){
        this.risultato = this.risultato / val
        return this
    }

    expressionSolver(exp){
        let arrExpTemp = exp.split("")
        let arrExp = []
        let numeroCorrente = ""

        for (let el of arrExpTemp){
            if (el == " "){
                continue
            }

            if (!isNaN(parseInt(el))) {
                numeroCorrente += el
            } else {
                if (numeroCorrente !== "") {
                    arrExp.push(Number(numeroCorrente))
                    numeroCorrente = ""
                }
                arrExp.push(el)
            }
        }
        if (numeroCorrente !== "") {
            arrExp.push(Number(numeroCorrente))
        }

        this.risultato = arrExp.shift();
        for (let i = 1; i < arrExp.length; i += 2) {
            let operatore = arrExp[i]
            let valore = arrExp[i + 1]

            if (operatore == "+") {
                this.add(valore)
            }
            else if (operatore == "-") {
                this.sub(valore)
            }
            else if (operatore == "*") {
                this.mul(valore)
            }
            else if (operatore == "/") {
                this.div(valore)
            }
        }
        return this.risultato
    }
}

(function(){
    let calc = new Calcolatrice()

    console.log(`6 - 2 * 5 + 8 / 4 = ${calc.expressionSolver("6 - 2 * 5 + 8 / 4")}`)
    console.log(`11 * 3 + 5 - 5 / 11 = ${calc.expressionSolver("11 * 3 + 5 - 5 / 11")}`)
    console.log(`29 + 2 - 7 / 3 / 2 + 1 * 2 = ${calc.expressionSolver("29 + 2 - 7 / 3 / 2 + 1 * 2")}`)
})()