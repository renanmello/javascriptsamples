let soma = 0;
let contador = 0;

// Loop infinito até o usuário digitar 0
while (true) {
    let numero = parseFloat(prompt("Digite um número (0 para sair):"));
    
    if (numero === 0) break; // Sai do loop se o número for 0
    
    soma += numero; // Soma o número
    contador++;     // Incrementa o contador
}

// Verifica se foi digitado pelo menos um número antes de calcular a média
if (contador > 0) {
    let media = soma / contador;
    console.log("Média dos números:", media);
} else {
    console.log("Nenhum número foi digitado.");
}