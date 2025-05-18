let soma = 0;

// Laço para ler 5 números
for (let i = 0; i < 5; i++) {
    let num = parseFloat(prompt(`Digite o número ${i + 1}:`));
    soma += num; // Soma cada número à variável soma
}

// Exibe o total da soma
console.log("Soma total:", soma);