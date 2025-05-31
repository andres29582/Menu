"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaTresNotas = mediaTresNotas;
const readline_sync_1 = __importDefault(require("readline-sync"));
function mediaTresNotas() {
    const n1 = readline_sync_1.default.questionFloat('Digite a primeira nota: ');
    const n2 = readline_sync_1.default.questionFloat('Digite a segunda nota: ');
    const n3 = readline_sync_1.default.questionFloat('Digite a terceira nota: ');
    const media = (n1 + n2 + n3) / 3;
    console.log(`A média é: ${media.toFixed(2)}`);
}
