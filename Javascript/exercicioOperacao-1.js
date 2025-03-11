"use strict";
let saldo = 0;
let deposito = 0;
let saque = 0;
let operacao;
function depositar(valor) {
    operacao = saldo += valor;
}
function sacar(valor) {
    operacao = saldo -= valor;
}
function saldoAtual() {
    return saldo;
}
console.log(`Saldo atual: ${saldoAtual()}`);
console.log(`Deposito de 100 ${depositar(100)}`);
console.log(`Saldo atual: ${saldoAtual()}`);
console.log(`Saque de 50 ${sacar(50)}`);
console.log(`Saldo atual: ${saldoAtual()}`);
