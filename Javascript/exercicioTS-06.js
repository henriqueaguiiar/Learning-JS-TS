"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quantidadeCriancas = 20;
const quantidadePreAdolescentes = 10;
const quantidadeTotal = 100;
let kids = quantidadeCriancas * 100;
let adolecentes = quantidadePreAdolescentes * 200;
const total = (quantidadeTotal - quantidadeCriancas - quantidadePreAdolescentes) * 300 + kids + adolecentes;
console.log(total);
