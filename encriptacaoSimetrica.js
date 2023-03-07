import { createCipheriv, randomBytes, createDecipheriv } from "crypto";
//o iv no final quer dizer vetor de inicialização
const mensagem = "Demonstração do curso"

const chave = randomBytes(32)//chave aleatoria, possui realmente 32 valores
//cria buffer com 32 valores
const vi = randomBytes(16)


const cifra = createCipheriv('aes256', chave, vi)

const mensagemCifrada = cifra.update(mensagem, 
    'utf-8', 'hex') + cifra.final("hex") //foi de utf p hex
// mensagem, codificacao do texto, e forma de mostrar a cifra

console.log(mensagemCifrada)

// transmitir ----- passa a chave e vetor de inicialização
// e a mensagem cifrada

const decifra = createDecipheriv('aes256', chave, vi)
const mensagemDecifrada = decifra.update(mensagemCifrada, 
    'hex', 'utf-8') + decifra.final('utf-8') //foi de hex p utf

console.log(mensagemDecifrada)