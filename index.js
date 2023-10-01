import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Lucas", 11122233309);
const cliente2 = new Cliente("Yohanna", 88822233309);

const contaCorrenteLucas = new ContaCorrente(1001, cliente1);

contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);
contaCorrenteLucas.depositar(100);

const valorSacado = contaCorrenteLucas.sacar(50);
console.log(valorSacado);

const conta2 = new ContaCorrente(102, cliente2);
console.log(conta2);

let valor = 200;
contaCorrenteLucas.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2)
console.log(contaCorrenteLucas);
console.log(ContaCorrente.numeroDeContas);