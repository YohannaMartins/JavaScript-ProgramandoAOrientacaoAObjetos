import {Cliente} from "./Cliente.js"

export class ContaCorrente{
   static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; //não é privado, mas significa que não devemos mexer por convenção//
    //#saldo = 0; campo privado, mas não é oficial https://github.com/tc39/proposal-class-fields#private-fields //


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; //se não pedir pra retornar, ele sempre retornará undefined//
        }

        // if(valor <= 0) return ---> outra forma de escrever o if acima
        //this._saldo -= valor
    }

     depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}