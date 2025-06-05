import readlineSync from 'readline-sync';

export function calculadoraSimples() {
  const n1 = readlineSync.questionFloat('Digite o primeiro número: ');
  const op = readlineSync.question('Digite o operador (+, -, *, /): ');
  const n2 = readlineSync.questionFloat('Digite o segundo número: ');

  let resultado: number | string;
  switch (op) {
    case '+': resultado = n1 + n2; break;
    case '-': resultado = n1 - n2; break;
    case '*': resultado = n1 * n2; break;
    case '/': resultado = n2 !== 0 ? n1 / n2 : 'Divisão por zero!'; break;
    default: resultado = 'Operador inválido!';
  }

  console.log('Resultado:', resultado);
}
