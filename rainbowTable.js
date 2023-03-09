import { createHash } from 'crypto'

// estrategia é o metodo de enciptação

function criaHash(dado, estrategia){
    return createHash(estrategia).update(dado).digest('hex')
}

const senhasComuns = ["senha", "123456", "senha123", "admin","senha123456","1234", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

const hashesVazadas = ["21232f297a57a5a743894a0e4a801fc3",
"cedf5ab7b5c5852b3ed35d7dbe3c3835",
"81dc9bdb52d04dc20036dbd8313ed055"]

const rainbowTable = senhasComuns.map(senha=> {
    return {"senha":senha, "hash":criaHash(senha, 'MD5')}
})

console.log(rainbowTable)

const senhasVazadas = hashesVazadas.map(hashVazada=>{
    for (let i of rainbowTable) {
        if (hashVazada==i.hash) {
            console.log(`A hash vazada ${i.hash} pertence à senha ${i.senha}`)
        }
    }
})



