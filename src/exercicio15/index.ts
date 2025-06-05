import readlineSync from 'readline-sync';

export function calculadoraIMC() {
  const peso = readlineSync.questionFloat('Digite o peso (kg): ');
  const altura = readlineSync.questionFloat('Digite a altura (m): ');
  const imc = peso / (altura ** 2);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
}
