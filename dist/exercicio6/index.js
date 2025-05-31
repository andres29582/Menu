"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerNumerosArray = lerNumerosArray;
const readline_sync_1 = __importDefault(require("readline-sync"));
let arrayNumeros = [];
function lerNumerosArray() {
    arrayNumeros = [];
    for (let i = 0; i < 5; i++) {
        const n = readline_sync_1.default.questionFloat(`Digite o número ${i + 1}: `);
        arrayNumeros.push(n);
    }
    console.log('Array preenchido:', arrayNumeros);
    return arrayNumeros;
}
