import readlineSync from 'readline-sync';

let arrayNumeros: number[] = [];

export function lerNumerosArray(): number[] {
  arrayNumeros = [];
  for (let i = 0; i < 5; i++) {
    const n = readlineSync.questionFloat(`Digite o número ${i + 1}: `);
    arrayNumeros.push(n);
  }
  console.log('Array preenchido:', arrayNumeros);
  return arrayNumeros;
}