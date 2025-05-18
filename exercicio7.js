// Lê quantidade de maçãs compradas
let quantidade = parseInt(prompt("Quantas maçãs foram compradas?"));
let preco;

// Define preço com base na quantidade
if (quantidade < 12) {
    preco = quantidade * 0.30; // Preço unitário R$ 0,30
} else {
    preco = quantidade * 0.25; // Preço unitário R$ 0,25
}

// Mostra o total formatado com duas casas decimais
console.log(`Valor total: R$${preco.toFixed(2)}`);