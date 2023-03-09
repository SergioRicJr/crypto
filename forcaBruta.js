import { createHash } from 'crypto'

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha) {
        if (this.nome === nome && this.hash === this.criaHash(senha)){
            console.log("usuario autenticado")
            return true
        } //else {
        //     console.log("usuario ou senha incorretos")
        // }
    }
}
//código omitido

const user = new Usuario("julio", "8324")

// user.autentica("julio","123456")

for (let senhaTeste=0; senhaTeste<10000; senhaTeste++) {
    if (user.autentica("julio", senhaTeste.toString())==true) {
        console.log(senhaTeste)
    }
}