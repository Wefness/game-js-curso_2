let numeroMinimo = 1;
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
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

function gerarNumeroAleatorio(numeroMinimo, numeroMaximo) {
    let min = Math.ceil(numeroMinimo);
    let max = Math.floor(numeroMaximo);

    return Math.floor(Math.random() * (max - min + 1)) + min;
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