let nome = prompt("Qual é o seu nome?");

let rendaMensalStr = prompt("Informe sua renda mensal:");
let rendaMensal = Number(rendaMensalStr);

while (isNaN(rendaMensal) || rendaMensalStr === null || rendaMensalStr.trim() === "") {
    rendaMensalStr = prompt("Valor inválido! Digite apenas números para a sua renda mensal:");
    rendaMensal = Number(rendaMensalStr);
}

let qtdDespesasStr = prompt("Quantas despesas serão informadas?");
let qtdDespesas = Number(qtdDespesasStr);

while (isNaN(qtdDespesas) || qtdDespesasStr === null || qtdDespesasStr.trim() === "") {
    qtdDespesasStr = prompt("Valor inválido! Digite um número para a quantidade de despesas:");
    qtdDespesas = Number(qtdDespesasStr);
}

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
} else {
    qtdDespesas = Math.floor(qtdDespesas); 
}

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesaStr = prompt(`Informe o valor da Despesa ${i}:`);
    let valorDespesa = Number(valorDespesaStr);

    while (isNaN(valorDespesa) || valorDespesaStr === null || valorDespesaStr.trim() === "") {
        valorDespesaStr = prompt(`Valor numérico inválido! Digite novamente o valor da Despesa ${i}:`);
        valorDespesa = Number(valorDespesaStr);
    }

    totalDespesas += valorDespesa;
}

let sobra = rendaMensal - totalDespesas;
let classificacao = "";

if (totalDespesas > rendaMensal) {
    classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let metaSobra = rendaMensal * 0.30; 
    
    if (sobra >= metaSobra) {
        classificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        classificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let resultadoFinal = 
    `--- Resultado do Orçamento ---\n` +
    `Nome: ${nome}\n` +
    `Renda: R$ ${rendaMensal.toFixed(2)}\n` +
    `Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
    `Sobra: R$ ${sobra.toFixed(2)}\n` +
    `Análise: ${classificacao}`;

alert(resultadoFinal);

console.log(resultadoFinal);