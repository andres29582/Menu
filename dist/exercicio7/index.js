"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maiorNumeroArray = maiorNumeroArray;
function maiorNumeroArray(array) {
    if (array.length === 0) {
        console.log('O array está vazio. Use a opção 6 primeiro.');
    }
    else {
        const maior = Math.max(...array);
        console.log('O maior número do array é:', maior);
    }
}
