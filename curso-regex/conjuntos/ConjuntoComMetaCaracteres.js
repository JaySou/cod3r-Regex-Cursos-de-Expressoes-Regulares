const texto = '.$+*?-'
console.log(texto.match(/[+.?*$]./g)) // não precia de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

// NÂO é um intervalor
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro de um conjunto: - [ ] ^