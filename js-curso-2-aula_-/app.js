let listaSorteada = [];
let tentativas = 1;
let numeroLimite = 10;
let numsecreto = gerarNumeroAleatorio();
exibirMensagemInicial();

function preencherCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    preencherCampo('h1','Jogo do número secreto');
    preencherCampo('p', 'Escolha um número entre 1 e 10');
}
function gerarNumeroAleatorio(){
    if(listaSorteada.length == numeroLimite){
        listaSorteada = [];
    }
    let numAleatorio = parseInt(Math.random() * numeroLimite + 1 );
    if(listaSorteada.includes(numAleatorio)){
        return gerarNumeroAleatorio();
    }else{
        listaSorteada.push(numAleatorio);
        return numAleatorio;
    }
}
function verificarChute(){
    chute = document.querySelector('input').value;
    if(chute == numsecreto){
        let palavraTentativa = tentativas > 1 ? ' tentativas!' : ' tentativa!'
        preencherCampo('p', 'Você ganhou! Com '+ tentativas + palavraTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numsecreto){
            preencherCampo('p', 'É menor!');
        }else{
            preencherCampo('p', 'É Maior!');
        }
        tentativas++;
        limparCampo();
    }
};
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    tentativas = 1;
    numsecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}