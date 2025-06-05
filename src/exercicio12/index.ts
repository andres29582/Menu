import readlineSync from 'readline-sync';

class Aluno {
  nome: string;
  matricula: string;

  constructor(nome: string, matricula: string) {
    this.nome = nome;
    this.matricula = matricula;
  }

  exibir() {
    console.log(`Aluno: ${this.nome}, Matrícula: ${this.matricula}`);
  }
}

export function classeAluno() {
  const nome = readlineSync.question('Digite o nome do aluno: ');
  const matricula = readlineSync.question('Digite a matrícula do aluno: ');
  const a = new Aluno(nome, matricula);
  a.exibir();
}
