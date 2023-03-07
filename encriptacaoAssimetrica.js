import { generateKeyPairSync } from "crypto";
//funcao p criar par de chaves

const {privateKey, publicKey} = generateKeyPairSync('rsa',{   
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }})

//primeiro parametro é o algoritmo de encriptacao
//segundo parametro é objeto com condicoes e configuracoes

// metodos para encriptacao publica e desencriptacao privada

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
) //primeiro a chave publica e depois a mensagem

console.log(dadosCriptografados.toString('hex'))

// transmissão -- 

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(dadosDecifrados.toString('utf-8'))


