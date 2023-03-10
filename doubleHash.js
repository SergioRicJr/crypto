// import { scryptSync, randomBytes, timingSafeEqual } from "crypto";
// // metodos necessarios para criar hash com sal

// // randomBytes vc da um tamanho e ele retorna uma quantidade de bytes q cabem no tamanho, gera numero aleatorio
// function criaHashComSal(senha) {
//     const sal = randomBytes(16).toString('hex')
//     const senhaHasheada = scryptSync(senha, sal, 64).toString('hex') //tamanho da senha no ultimo parametro
// //.toSring com parametro decimal para conseguir ler em hexadecimal
//     return {"sal": sal, "senhaHasheada": senhaHasheada}
// }

// class Usuario{
//     constructor(nome, senha) {
//         this.nome = nome
//         this.sal = criaHashComSal(senha).sal
//         this.hash = criaHashComSal(senha).senhaHasheada
//     } //split com aspas duplas deu erro

//     autentica(nome, senha) {
//         if (this.nome === nome) {
//             const testeHash = scryptSync(senha, this.sal, 64)
//             // checa a hash real pra ver se condiz com oq tem armazenado
//             const hashReal = Buffer.from(this.hash, 'hex')

//             const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

//             if (hashesCorrespondem) {
//                 console.log("usuario autenticado com sucesso")
//                 return true
//             } else {
//                 console.log("usuario ou senha incorretos")
//             }
//         }
//     }
// }

// const user = new Usuario("sergio", "123456")
// user.autentica("sergio", "123456")

import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');

    const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");

    return `${sal}:${senhaHasheada}`
}

//código omitido

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }

   autentica(nome, senha){
    if (nome === this.nome){
        const testeHash = scryptSync(senha, this.sal, 64);
        // o "sal" usado foi o armazenado pois cada vez que a primeira funcao é chamada um novo sal é gerado aleatoriamente
        const hashReal = Buffer.from(this.hash, 'hex'); //informacao guardado em um Buffer, oq é um buffer?
        // console.log( `essa é a hash real ${hashReal}`) 
        // linha acima da resultado nao legivel
        // console.log(`esse é o this.hash ${this.hash}`)
        //linha acima retorna hash em hexadecimal
        // código omitido

        const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)
// compara a nova hash que foi gerada com a senha e a hashReal que é a que está armazenada
// funcao para seguranca p equilibrar o tempo?
        if (hashesCorrespondem){
            console.log("Usuário autenticado com sucesso")
            return true;
        } else {
                console.log("usuario não autenticado")
            }
        }
    }
}

const sal = randomBytes(32).toString('hex')
console.log(sal)
const senha = '12345'
const hash = scryptSync(senha, sal, 64)
console.log(hash)
//código omitido
const senhaInserida = '123456'
const hashNova = scryptSync(senhaInserida, sal, 64)

// timingsafeequal so recebe buffer 
const teste = timingSafeEqual(hash, hashNova)
console.log(teste)


// const jm = new Usuario ('sergio', '123')
// jm.autentica('sergio', '123')