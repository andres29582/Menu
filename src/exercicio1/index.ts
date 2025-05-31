import readlineSync from 'readline-sync';

export function somaDoisNumeros() {
  const a = readlineSync.questionFloat('Digite o primeiro número: ');
  const b = readlineSync.questionFloat('Digite o segundo número: ');
  console.log(`A soma é: ${a + b}`);
}