"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contarPalavras = contarPalavras;
const readline_sync_1 = __importDefault(require("readline-sync"));
function contarPalavras() {
    const frase = readline_sync_1.default.question('Digite uma frase: ');
    const palavras = frase.trim().split(/\s+/);
    console.log(`Quantidade de palavras: ${palavras.length}`);
}
