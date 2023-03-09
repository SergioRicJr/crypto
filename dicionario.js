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
        } else {
            console.log("usuario ou senha incorretos")
        }
    }
}
//código omitido

const user = new Usuario("julio", "senha")

const listaSenhas = ["123", "123456", "julio", "senha", "senha123"]

for (let i of listaSenhas) {
    if (user.autentica("julio", i)) {
        console.log(`A senha é ${i}`)
    }
}