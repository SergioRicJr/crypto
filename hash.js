import {createHash} from 'crypto'

function criaHash(senha) { 
    //primeiro param = algoritmo criptografico
    //no .update passa a senha p criar hash
    // terceiro param = codificacao, como a informacao vai ser apresentada
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash('senha'))