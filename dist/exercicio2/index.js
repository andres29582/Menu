"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parOuImpar = parOuImpar;
const readline_sync_1 = __importDefault(require("readline-sync"));
function parOuImpar() {
    const num = readline_sync_1.default.questionInt('Digite um número: ');
    if (num % 2 === 0) {
        console.log('É par');
    }
    else {
        console.log('É ímpar');
    }
}
