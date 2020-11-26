// No inicio
// Um Byte (8 bits) - 265 caracteres
// Simbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Simbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variavel - Expancivel
// Suporta mais de 1 Milhão caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos


// https://unicode-table.com/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))
