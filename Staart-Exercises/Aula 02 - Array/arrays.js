let contas = [1100, 230, 63, 6 ,859, 96]
const total = contas.reduce((a,v) => a + v)// reduce é um método() q utiliza callback, função dentro de outra função; (a,v) são parametros.
console.log(total)
