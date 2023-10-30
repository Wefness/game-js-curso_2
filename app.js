let listaDeNumerosSorteados = [];
let numeroMinimo = 1;
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroLimite);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre ${numeroMinimo} e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let textoResposta;

    if(chute == numeroSecreto) {
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        textoResposta = `Você descoriu o número secreto com ${tentativas} ${palavratentativa}!`;
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

function gerarNumeroAleatorio(numeroMinimo, numeroLimite) {
    let min = Math.ceil(numeroMinimo);
    let max = Math.floor(numeroLimite);
    let numeroEscolhido = Math.floor(Math.random() * (max - min + 1)) + min;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(listaDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        listaDeNumerosSorteados.push(numeroEscolhido);

        return gerarNumeroAleatorio(numeroMinimo, numeroLimite);
    } else {
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute =  document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroLimite);
    tentativas = 1;

    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}