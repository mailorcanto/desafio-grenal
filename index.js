//A FGF contratou você para escrever um programa para fazer uma estatística de resultados de vários Grenais. Escreva um programa para ler o número de
//gols marcados pelo Grêmio e pelo Inter em um Grenal. Logo após, escrever a mensagem "Novo Grenal (1 - sim, 2 - não)" e solicitar uma resposta.
//Se a resposta for 1, o algoritmo deve ser executado novamente, solicitando o número de gols marcados pelos times em uma nova partida.
//Caso contrário, deve ser encerrado, imprimindo:
//Quantos Grenais fizeram parteda estatística.
//O número de vitórias do Grêmio.
//O número de vitórias do Inter.
//O número de empates.
//Uma mensagem indicando qual time venceu o maior número de Grenais, ou 'não houve maior vencedor' caso termine empatado.

var vitoriasGremio = 0;
var vitoriasInter = 0;
var empates = 0;

function receberPlacar (){
    var g = Number(prompt('Informe número de gols marcados pelo Grêmio no Grenal'));
    var i = Number(prompt('Informe número de gols marcados pelo Inter no Grenal'));
    
    if (g > i) {
        vitoriasGremio += 1; 
    }
    else if (i > g){
        vitoriasInter += 1;
    }
    else {
        empates += 1;
    }

    var grenaisJogados = vitoriasGremio + vitoriasInter + empates;

    var continuar = Number((prompt('Novo Grenal: (1 - sim, 2 - não)')));

    if (continuar == 1) {
        receberPlacar();
    }
    else{
        if (vitoriasGremio > vitoriasInter){
            var maiorVencedor = 'Grêmio é o maior vencedor';
        }
        else if (vitoriasInter > vitoriasGremio){
            maiorVencedor = 'Inter é o maior vencedor';
        }
        else {
            maiorVencedor = 'Não há maior vencedor';
        }
        alert(`Total de Grenais: ${grenaisJogados}
        Vitórias do Grêmio: ${vitoriasGremio}
        Vitórias do Inter: ${vitoriasInter}
        Empates: ${empates}
        ${maiorVencedor}`)
    }         
}

receberPlacar();
