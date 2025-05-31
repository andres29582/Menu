"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiusParaFahrenheit = celsiusParaFahrenheit;
const readline_sync_1 = __importDefault(require("readline-sync"));
function celsiusParaFahrenheit() {
    const c = readline_sync_1.default.questionFloat('Digite a temperatura em Celsius: ');
    const f = c * 1.8 + 32;
    console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)}`);
}
