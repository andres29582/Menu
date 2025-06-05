import readlineSync from 'readline-sync';

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

export function classePessoa() {
  const nome = readlineSync.question('Digite o nome da pessoa: ');
  const idade = readlineSync.questionInt('Digite a idade da pessoa: ');
  const p = new Pessoa(nome, idade);
  p.apresentar();
}
