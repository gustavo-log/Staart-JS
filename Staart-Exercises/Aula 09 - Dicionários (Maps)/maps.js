var dicionario = new Map()

/*dicionario.set('pprt','papo reto')
dicionario.set('pdp', 'pode pá')
dicionario.set('blz', 'beleza')
dicionario.set('fmz', 'firmeza')

console.table(dicionario)

var palavra = dicionario.get('blz')
console.log(palavra)
*/
var contatos = [
    ['gustavo', '11991389160'],     //todos esses elementos são chaves
    ['edilma', '11994370080'],
    ['david', '11988389122'],
]

dicionario.set(contatos[0], {nascimento: '18/05/2005'})    // o nascimento são valores
dicionario.set(contatos[1], {nascimento: '20/10/1975'})
dicionario.set(contatos[2], {nascimento: '17/06/1974'})

console.table(dicionario)

for(let entrada of dicionario.entries()){    //mostra valores e chaves
    console.log(entrada)
}

for(let valores of dicionario.values()){     //mostra somente os valores
    console.log(valores)
}

for(let chaves of dicionario.keys()){        //mostra somente as chaves
    console.log(chaves)
}