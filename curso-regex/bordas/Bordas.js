const texto = 'Romário era um excelente jogador\n, mais hoje é um politico questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da linha ou da string
console.log(texto.match(/r$/gi)) // $ final de linha ou da string

console.log(texto.match(/^r.*r$/gi)) // problema do dotall