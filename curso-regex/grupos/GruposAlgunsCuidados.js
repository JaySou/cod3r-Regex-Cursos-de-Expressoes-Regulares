const texto = 'Pedrinho (filho do pedro silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // Não é um grupo
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)/gi))
