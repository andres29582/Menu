import readlineSync from 'readline-sync';

export function tabuadaMultiplicar() {
  const num = readlineSync.questionInt('Digite um número para ver a tabuada: ');
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
