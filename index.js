import {client} from './Cliente.js'
import {contaBancaria} from './ContaCorrente.js'

const client1 = new client('Roger', 48936539302)
const client2 = new client('Thiago', 16048957378)
//console.log(client2)

const contaRoger =  new contaBancaria(125, 1001, client1)
const contaThiago =  new contaBancaria(0, 1001, client2)


console.log(contaRoger, contaThiago)

const transfer = contaRoger.transferencia(100, contaThiago)

console.log(contaRoger, contaThiago)

contaThiago.deposito(100)
console.log(contaThiago)