const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((element) => {
    element.addEventListener('click', (event) => {
        manipularDados(event.target.dataset.controle, event.target.parentNode);
        atualizandoEstatisticas(event.target.dataset.controle, event.target.dataset.peca);
    });
});

function manipularDados(acao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (acao === '+') {
        peca.value = parseInt(peca.value) + 1;
    }
    else if (acao === '-') {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizandoEstatisticas(acao, peca) {
    estatisticas.forEach((element) => {
        const valor = pecas[peca][element.dataset.estatistica];
        if (acao === '+') {
            element.innerHTML = parseInt(element.innerHTML) + valor;
        }
        else if (acao === '-') {
            element.innerHTML = parseInt(element.innerHTML) - valor;
        }
    });
}