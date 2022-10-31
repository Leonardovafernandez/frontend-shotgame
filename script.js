const vermelho = document.querySelector('.red');
const azul = document.querySelector('.blue');
const roxo = document.querySelector('.purple');
const laranja = document.querySelector('.orange');
const vermelhoI = document.querySelector('.redImg');
const azulI = document.querySelector('.blueImg');
const roxoI = document.querySelector('.purpleImg');
const laranjaI = document.querySelector('.orangeImg');
let vermelhoC = false;
let azulC = false;
let roxoC = false;
let laranjaC = false;
const resultado = document.querySelector('.h2-result')
const button = document.querySelector('button');
let valor;
const venceu = `Você acertou!\n Escolha alguem para beber!`;
const perdeu = `Você errou!\n Sua vez de dar um shot!.`;
const escolher = `Escolha uma bebida!`;
const all = document.querySelectorAll('.box');
alert("Bem-vindo ao Shotgame! \n O jogo ideal para você se divertir com seus amigos na balada.\n\n Como funciona:\n - Escolha uma bebida e aperte para sortear, se a bebida que você escolheu for a bebida da vez escolha alguem para beber, caso o contrário, você bebe!");

const corVermelho = () => {
    if (!vermelhoC) {
        vermelhoI.src = './assets/1.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = true;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 0;
    } else if (vermelhoC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    }

};

const corAzul = () => {
    if (!azulC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/2.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = true;
        roxoC = false;
        laranjaC = false;
        return valor = 1;
    } else if (azulC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    }

};

const corRoxo = () => {
    if (!roxoC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/3.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = true;
        laranjaC = false;
        return valor = 2;
    } else if (roxoC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    }

};

const corLaranja = () => {
    if (!laranjaC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/4.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = true;
        return valor = 3;
    } else if (laranjaC) {
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    }
};

const sortear = () => {
    const aleatoryPosition = Math.floor(Math.random() * 4);
    if (aleatoryPosition === valor) {
        resultado.textContent = venceu;
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    } else if (valor === 10) {
        resultado.textContent = escolher;
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;
    } else {
        resultado.textContent = perdeu;
        vermelhoI.src = './assets/5.png';
        azulI.src = './assets/6.png';
        roxoI.src = './assets/7.png';
        laranjaI.src = './assets/8.png';
        vermelhoC = false;
        azulC = false;
        roxoC = false;
        laranjaC = false;
        return valor = 10;

    };
};

vermelho.onclick = corVermelho;
azul.onclick = corAzul;
roxo.onclick = corRoxo;
laranja.onclick = corLaranja;
button.onclick = sortear;