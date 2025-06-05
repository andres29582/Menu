import readlineSync from 'readline-sync';

class Carro {
  modelo: string;
  ano: number;

  constructor(modelo: string, ano: number) {
    this.modelo = modelo;
    this.ano = ano;
  }

  exibir() {
    console.log(`Carro: ${this.modelo}, Ano: ${this.ano}`);
  }
}

export function classeCarro() {
  const modelo = readlineSync.question('Digite o modelo do carro: ');
  const ano = readlineSync.questionInt('Digite o ano do carro: ');
  const c = new Carro(modelo, ano);
  c.exibir();
}
