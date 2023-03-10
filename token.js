import jwt from 'jsonwebtoken'

//chave secreta
//pode ser usada com random bytes entre outras coisas
const chaveSecreta = 'chaveSuperSecreta'


//primeiro parametro são os dados e o segundo a chave
const token = jwt.sign({
    apelido: "jm",
    curso: "segurança e node.js"
}, chaveSecreta, {algorithm: 'HS256', expiresIn: 10})

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)