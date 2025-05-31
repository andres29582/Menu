"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.somaDoisNumeros = somaDoisNumeros;
const readline_sync_1 = __importDefault(require("readline-sync"));
function somaDoisNumeros() {
    const a = readline_sync_1.default.questionFloat('Digite o primeiro número: ');
    const b = readline_sync_1.default.questionFloat('Digite o segundo número: ');
    console.log(`A soma é: ${a + b}`);
}
