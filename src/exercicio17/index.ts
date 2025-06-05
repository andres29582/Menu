import readlineSync from 'readline-sync';

export function jogoAdivinharNumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  console.log('Tente adivinhar o número entre 1 e 100!');
  let acertou = false;
  while (!acertou) {
    const chute = readlineSync.questionInt('Digite um número: ');
    if (chute === numeroSecreto) {
      console.log('Parabéns! Você acertou!');
      acertou = true;
    } else if (chute < numeroSecreto) {
      console.log('Mais alto!');
    } else {
      console.log('Mais baixo!');
    }
  }
}
