// Solicita ao usuário um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é divisível por 2 (resto zero)
if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}