 export class contaBancaria {
    saque(valorSacado){
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
        }
    }

    deposito(valorDepositado) {
        if(valorDepositado > 0) {
            this._saldo += valorDepositado;
        }
    }

    transferencia(valor, conta) {
        const valorSacado = this.saque(valor)
        const transferencia = conta.deposito(valorSacado)
        return transferencia
    }

    constructor(_saldo, agencia, cliente){
        this._saldo = _saldo;
        this.agencia = agencia  
        this.cliente = cliente
    }   
}

