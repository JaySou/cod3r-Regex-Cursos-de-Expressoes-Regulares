const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // são os números
console.log(texto.match(/\D/g)) // são os não números

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // não aracteres [a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // expaços [\t\n\r\f]
console.log(texto.match(/\S/g)) // nãos expaços [\t\n\r\f]