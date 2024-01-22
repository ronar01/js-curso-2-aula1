preencherCampo('h1','Jogo do número secreto');
preencherCampo('p', 'Escolha um número entre 1 e 10');

let chute = 3;
let numsecreto = parseInt((Math.random() * 10)) + 1;

function preencherCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function verificarChute(){
    if(chute == numsecreto){
        paragrafo.innerHTML = 'Você acertou!';
    }else if(chute > numsecreto){
        paragrafo.innerHTML = 'É menor!';
        console.log(numsecreto);
    }else{
        paragrafo.innerHTML = 'É maior!';
        console.log(numsecreto);
    }
};