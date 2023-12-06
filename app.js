/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Test Your Mind";
let paragrafo = document.querySelector('p');
paragrafo.innerHTML ="Escolha um número entre 1 e 10";*/
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();
document.getElementById('chute').removeAttribute('disabled');

function exibirTextoNaTela(tag, text ){
 campo = document.querySelector(tag);
 campo.innerHTML = text;
 responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial (){
exibirTextoNaTela('h1', 'Teste Sua Sorte');
exibirTextoNaTela('p', 'Escolha número entre 1 e 10, escolha direito essa merda');
}

function verificarChute() {
chute = document.querySelector('input').value;

    if(numeroAleatorio == chute ){
        exibirTextoNaTela('h1', 'Acerto Miseravi');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ('O número ' + chute +` está correto, você precisou de ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if (numeroAleatorio > chute){
            exibirTextoNaTela('p', 'O número secreto é maior');
        }else{
            exibirTextoNaTela('p', 'O número secreto é menor' );
        }
        tentativas++;
        limparCampo();
    }
    if(tentativas >= 4){
        exibirTextoNaTela ('h1', 'Se Fodeu!' );
       // reiniciarJogo();
       document.getElementById('reiniciar').removeAttribute('disabled');
       document.getElementById('chute').setAttribute('disabled', true);


    }
    

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');


    
}


