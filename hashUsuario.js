import {createHash} from 'crypto'

function criaHash(senha) { 
    return createHash('sha256').update(senha).digest('hex')
}

class usuario {
    constructor(nome, senha) {
        this.nome = nome
        this.hash = criaHash(senha)
    }

    autentica(nome, senha) {
        if (this.nome === nome && this.hash === criaHash(senha)){
            console.log("usuario autenticado")
        } else {
            console.log("usuario ou senha incorretos")
        }
    }
}

const julio = new usuario("julio", '123456')

julio.autentica("julio", "123456")