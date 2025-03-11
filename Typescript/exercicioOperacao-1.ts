let saldo: number = 0;
let deposito: number = 0;
let saque: number = 0;

let operacao: number;

function depositar(valor: number): void {
    operacao =  saldo += valor;
}

function sacar(valor: number): void {
    operacao = saldo -= valor;
}

function saldoAtual(): number {
    return saldo;
}


console.log(`Saldo atual: ${saldoAtual()}`);	

console.log(`Deposito de 100 ${depositar(100)}`);
console.log(`Saldo atual: ${saldoAtual()}`);

console.log(`Saque de 50 ${sacar(50)}`);
console.log(`Saldo atual: ${saldoAtual()}`);




