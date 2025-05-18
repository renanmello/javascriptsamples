let fibonacci = [];
let a = 0, b = 1;

// Gera os primeiros 10 números da sequência
for (let i = 0; i < 10; i++) {
    fibonacci.push(a);          // Adiciona o número atual à sequência
    let proximo = a + b;        // Calcula o próximo número
    a = b;                      // Atualiza o valor de a
    b = proximo;                // Atualiza o valor de b
}

// Exibe a sequência completa
console.log("Sequência de Fibonacci:", fibonacci);