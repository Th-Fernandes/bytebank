class contaBancaria {
    saque(valorSacado){
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return `você sacou ${valorSacado} reais `
        }
    }

    deposito(valorDepositado) {
        if(valorDepositado > 0) {
            this._saldo += valorDepositado;
            
        }
        else {
            console.log('depósito inválido')
        }
    }

    agencia;
    _saldo = 120;
}


const richardAccount = new contaBancaria()

richardAccount.agencia = 1001

const deposito = richardAccount.saque(30)
console.log(richardAccount)
console.log(deposito)