// Lê o número para exibir a tabuada
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Gera a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}