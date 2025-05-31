import readlineSync from 'readline-sync';

export function celsiusParaFahrenheit() {
  const c = readlineSync.questionFloat('Digite a temperatura em Celsius: ');
  const f = c * 1.8 + 32;
  console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)}`);
}