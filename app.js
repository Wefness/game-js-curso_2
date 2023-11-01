let listaDeNumerosSorteados = [];
const numeroMinimo = prompt('Escolha o valor mínimo do intervalo');
const numeroMaximo = prompt('Escolha o valor máximo do intervalo');
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let textoResposta;

    if(chute == numeroSecreto) {
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        textoResposta = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            textoResposta = 'O número secreto é menor';
        } else {
            textoResposta = 'O número secreto é maior';
        }

        tentativas++;
    }

    exibirTextoNaTela('p', textoResposta);
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(listaDeNumerosSorteados == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
    } else {
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute =  document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
    tentativas = 1;

    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function Test() {
    let test = 1;
}