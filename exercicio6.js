// Lê os três lados do triângulo
let a = parseFloat(prompt("Digite o lado A do triângulo:"));
let b = parseFloat(prompt("Digite o lado B do triângulo:"));
let c = parseFloat(prompt("Digite o lado C do triângulo:"));

// Primeiro verifica se os lados formam um triângulo válido
if (a < b + c && b < a + c && c < a + b) {
    // Verifica se todos os lados são iguais
    if (a === b && b === c) {
        console.log("Triângulo equilátero");
    } 
    // Verifica se dois lados são iguais
    else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles");
    } 
    // Se nenhum lado for igual
    else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Não forma um triângulo.");
}