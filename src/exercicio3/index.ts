import readlineSync from 'readline-sync';

export function mediaTresNotas() {
  const n1 = readlineSync.questionFloat('Digite a primeira nota: ');
  const n2 = readlineSync.questionFloat('Digite a segunda nota: ');
  const n3 = readlineSync.questionFloat('Digite a terceira nota: ');
  const media = (n1 + n2 + n3) / 3;
  console.log(`A média é: ${media.toFixed(2)}`);
}