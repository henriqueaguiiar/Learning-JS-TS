"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cerveja = "ipa";
let temperatura = 7;
if (cerveja === "pilsen") {
    console.log((temperatura >= 0 && temperatura <= 4 ? "TEMPERATURA IDEAL" : "TEMPERATURA NAO IDEAL"));
}
else if (cerveja === "trigo") {
    console.log((temperatura >= 4 && temperatura <= 6 ? "TEMPERATURA IDEAL" : "TEMPERATURA NAO IDEAL"));
}
else if (cerveja === "ipa") {
    console.log((temperatura >= 7 && temperatura <= 10 ? "TEMPERATURA IDEAL" : "TEMPERATURA NAO IDEAL"));
}
else {
    console.log("CERVEJA DESCONHECIDA");
}
