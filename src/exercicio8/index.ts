import readlineSync from 'readline-sync';

export function contarVogais() {
  const str = readlineSync.question('Digite uma string: ');
  const vogais = str.match(/[aeiouáéíóúãõâêîôûàèìòù]/gi);
  console.log(`Quantidade de vogais: ${vogais ? vogais.length : 0}`);
}