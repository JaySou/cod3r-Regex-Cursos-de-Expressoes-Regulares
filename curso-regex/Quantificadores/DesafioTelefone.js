const texto = `Lista telefonica:
	- (11) 98756-1212
	- 98765-4321
	- 19 98965-7029
	- 989657029
	- 8965-7029
`

console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))