let array = new Array() //uma forma diferente de declarar um Array
let array2 = [] //forma comum

let frutas = ['Abacaxi']
frutas.push('Banana')
frutas.push('Coco')
frutas.unshift('Morango') //Método utilizado para adicionar no inicio do Array
frutas.pop() //Remove sempre o ultimo elemento do Array
frutas.shift() // Remove o primeiro elemento do Array
frutas.splice(2) // Remove o elemento solicitado no paremetro()
console.table(frutas)