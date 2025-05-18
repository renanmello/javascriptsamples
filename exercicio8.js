// Lê dois números quaisquer
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// Compara os valores e imprime em ordem crescente
if (num1 < num2) {
    console.log(num1, num2);
} else {
    console.log(num2, num1);
}