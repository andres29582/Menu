import readlineSync from 'readline-sync';

export function contarPalavras() {
  const frase = readlineSync.question('Digite uma frase: ');
  const palavras = frase.trim().split(/\s+/);
  console.log(`Quantidade de palavras: ${palavras.length}`);
}
