const senha = "minhaSenha"

function cifraMensagem(mensagem, qtdeMovimentos) {
    const mensagemCifrada =  mensagem.split('').map(char => {
        const codigoChar = char.charCodeAt(0) //pega o codigo do caracter na posicao 0
        return String.fromCharCode(codigoChar + qtdeMovimentos)
    })
    return mensagemCifrada.join('')
}  

const senhaCifrada = cifraMensagem(senha, 1) //

function decifraMensagem(mensagem, qtdeMovimentos) {
    const mensagemCifrada =  mensagem.split('').map(char => {
        const codigoChar = char.charCodeAt(0)
        console.log(codigoChar) //pega o codigo do caracter na posicao 0
        return String.fromCharCode(codigoChar - qtdeMovimentos)
    })
    return mensagemCifrada.join('')
}  

const senhaRevelada = decifraMensagem(senhaCifrada, 1)

console.log(senhaCifrada)
console.log(senhaRevelada)