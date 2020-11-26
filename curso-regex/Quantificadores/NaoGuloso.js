const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÂO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,}<\/div>/g))

// quantidficadores NÂO gulosos {lazy}...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,}?<\/div>/g))