import readlineSync from 'readline-sync';

export function parOuImpar() {
  const num = readlineSync.questionInt('Digite um número: ');
  if (num % 2 === 0) {
    console.log('É par');
  } else {
    console.log('É ímpar');
  }
}