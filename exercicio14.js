// Lê o número para calcular o fatorial
let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

// Calcula o fatorial com um loop for
for (let i = 1; i <= numero; i++) {
    fatorial *= i; // Multiplica o fatorial pelo próximo número
}

// Exibe o resultado
console.log(`Fatorial de ${numero} é:`, fatorial);