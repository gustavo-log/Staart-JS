var conjuntos = new Set()  // Conjuntos podem conter apenas valores único, sendo ignorada qualquer repetição de valores

var times = ['Santos', 'Fluminense', 'Corinthians', 'Santos']

var campeonato = new Set(times)

console.table(campeonato)


var sets = new Set()


sets.add('Gustavo')
sets.add('Gustavo')
sets.add('Lavines')
sets.add(2023)
sets.add(true)
const casal = ['Gustavo', 'Lavinez']
sets.add(casal)
sets.delete(casal)

sets.forEach((valor) =>{           // outra forma de imprimir os valores de um determinado conjunto
    console.table(valor)
})

const valoresSets = sets.values()  // values e keys são métodos para descobrir quais os valores de um conjunto

for(let valores of valoresSets){
    console.table(valores)
}


var familia = new Set(['Gustavo', 'Edilma', 'David', 'Lavinez'])

if(!familia.has('Pedrinho'))  familia.add('Pedrinho')  // o método has, é para saber se determinado elemento faz parte do conjunto

console.table(familia)
console.log(familia.size)    // size indica a quantidade de itens no conjunto