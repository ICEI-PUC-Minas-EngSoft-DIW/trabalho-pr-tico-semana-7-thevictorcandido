var nome = prompt("Qual seu nome? ");
var rendaMensal = Number(prompt("Qual a sua renda mensal? "));
while (isNaN(rendaMensal)) {
    rendaMensal = Number(prompt("Valor inválido! Digite novamente sua Renda Mensal: "));
}

var despesas = Number(prompt("Quantas despesas você possui? "));
while (isNaN(despesas)) {
    despesas = Number(prompt("Valor inválido! Digite novamente suas despesas: "));
}

if (despesas < 1) {
    despesas = 1;
}
else if (despesas > 5) {
    despesas = 5;
}

let valorTotal = 0;
for (let i = 0; i < despesas; i++) {
    let valorDespesa = Number(prompt(`Qual o valor da despesa ${i + 1}? `));
    valorTotal = valorTotal + valorDespesa;
}

let mensagem = "";
let sobra = 0;
if (valorTotal > rendaMensal) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
}
else {
    sobra = rendaMensal - valorTotal;
    if (sobra >= (rendaMensal * 0.3)) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    }
    else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

alert(`Seu nome é ${nome} \nSua renda é de R$${rendaMensal} \nO total das suas despesas é de R$${valorTotal} \nSobra no mês: R$${sobra} \nMensagem: ${mensagem}`)
console.log(`Seu nome é ${nome} \nSua renda é de R$${rendaMensal} \nO total das suas despesas é de R$${valorTotal} \nSobra no mês: R$${sobra} \nMensagem: ${mensagem}`)