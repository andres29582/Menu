"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const exercicio1_1 = require("./exercicio1");
let arrayNumeros = [];
function menu() {
    console.log('\n=== MENU ===');
    console.log('1 - Soma de dois números');
    console.log('2 - Verificar se é par ou ímpar');
    console.log('3 - Calcular a média de três notas');
    console.log('4 - Converter Celsius para Fahrenheit');
    console.log('5 - Exibir números pares de 1 a 20');
    console.log('6 - Ler 5 números e armazenar em um array');
    console.log('7 - Encontrar o maior número do array anterior');
    console.log('8 - Contar vogais em uma string');
    console.log('9 - Calculadora simples');
    console.log('10 - Ordenar o array em ordem crescente');
    console.log('11 - Classe Pessoa simples');
    console.log('12 - Classe Aluno simples');
    console.log('13 - Classe Carro simples');
    console.log('14 - Tabuada de multiplicar');
    console.log('15 - Calculadora IMC');
    console.log('16 - Validar uma senha simples');
    console.log('17 - Jogo de adivinhar o número');
    console.log('18 - Contar palavras em uma string');
    console.log('0 - Sair');
    const opcao = readline_sync_1.default.question('Escolha uma opção: ');
    switch (opcao) {
        case '1':
            (0, exercicio1_1.somaDoisNumeros)();
            break;
        case '2':
            parOuImpar();
            break;
        case '3':
            mediaTresNotas();
            break;
        case '4':
            celsiusParaFahrenheit();
            break;
        case '5':
            exibirPares();
            break;
        case '6':
            lerNumerosArray();
            break;
        case '7':
            maiorNumeroArray();
            break;
        case '8':
            contarVogais();
            break;
        case '9':
            calculadoraSimples();
            break;
        case '10':
            ordenarArray();
            break;
        case '11':
            classePessoa();
            break;
        case '12':
            classeAluno();
            break;
        case '13':
            classeCarro();
            break;
        case '14':
            tabuadaMultiplicar();
            break;
        case '15':
            calculadoraIMC();
            break;
        case '16':
            validarSenha();
            break;
        case '17':
            jogoAdivinharNumero();
            break;
        case '18':
            contarPalavras();
            break;
        case '0':
            console.log('Saindo...');
            process.exit(0);
            break;
        default:
            console.log('Opção inválida!');
            menu();
    }
}
function parOuImpar() {
    const num = readline_sync_1.default.questionInt('Digite um número: ');
    if (num % 2 === 0)
        console.log('É par');
    else
        console.log('É ímpar');
    menu();
}
function mediaTresNotas() {
    const n1 = readline_sync_1.default.questionFloat('Digite a primeira nota: ');
    const n2 = readline_sync_1.default.questionFloat('Digite a segunda nota: ');
    const n3 = readline_sync_1.default.questionFloat('Digite a terceira nota: ');
    const media = (n1 + n2 + n3) / 3;
    console.log(`A média é: ${media.toFixed(2)}`);
    menu();
}
function celsiusParaFahrenheit() {
    const c = readline_sync_1.default.questionFloat('Digite a temperatura em Celsius: ');
    const f = c * 1.8 + 32;
    console.log(`Temperatura em Fahrenheit: ${f.toFixed(2)}`);
    menu();
}
function exibirPares() {
    console.log('Números pares de 1 a 20:');
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
    menu();
}
function lerNumerosArray() {
    arrayNumeros = [];
    for (let i = 0; i < 5; i++) {
        const n = readline_sync_1.default.questionFloat(`Digite o número ${i + 1}: `);
        arrayNumeros.push(n);
    }
    console.log('Array preenchido:', arrayNumeros);
    menu();
}
function maiorNumeroArray() {
    if (arrayNumeros.length === 0) {
        console.log('O array está vazio. Use a opção 6 primeiro.');
    }
    else {
        const maior = Math.max(...arrayNumeros);
        console.log('O maior número do array é:', maior);
    }
    menu();
}
function contarVogais() {
    const str = readline_sync_1.default.question('Digite uma string: ');
    const vogais = str.match(/[aeiouáéíóúãõâêîôûàèìòù]/gi);
    console.log(`Quantidade de vogais: ${vogais ? vogais.length : 0}`);
    menu();
}
function calculadoraSimples() {
    const n1 = readline_sync_1.default.questionFloat('Digite o primeiro número: ');
    const op = readline_sync_1.default.question('Digite o operador (+, -, *, /): ');
    const n2 = readline_sync_1.default.questionFloat('Digite o segundo número: ');
    let resultado;
    switch (op) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            resultado = n2 !== 0 ? n1 / n2 : 'Divisão por zero!';
            break;
        default: resultado = 'Operador inválido!';
    }
    console.log('Resultado:', resultado);
    menu();
}
function ordenarArray() {
    if (arrayNumeros.length === 0) {
        console.log('O array está vazio. Use a opção 6 primeiro.');
    }
    else {
        const ordenado = [...arrayNumeros].sort((a, b) => a - b);
        console.log('Array ordenado:', ordenado);
    }
    menu();
}
function classePessoa() {
    class Pessoa {
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        apresentar() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
    const nome = readline_sync_1.default.question('Digite o nome da pessoa: ');
    const idade = readline_sync_1.default.questionInt('Digite a idade da pessoa: ');
    const p = new Pessoa(nome, idade);
    p.apresentar();
    menu();
}
function classeAluno() {
    class Aluno {
        constructor(nome, matricula) {
            this.nome = nome;
            this.matricula = matricula;
        }
        exibir() {
            console.log(`Aluno: ${this.nome}, Matrícula: ${this.matricula}`);
        }
    }
    const nome = readline_sync_1.default.question('Digite o nome do aluno: ');
    const matricula = readline_sync_1.default.question('Digite a matrícula do aluno: ');
    const a = new Aluno(nome, matricula);
    a.exibir();
    menu();
}
function classeCarro() {
    class Carro {
        constructor(modelo, ano) {
            this.modelo = modelo;
            this.ano = ano;
        }
        exibir() {
            console.log(`Carro: ${this.modelo}, Ano: ${this.ano}`);
        }
    }
    const modelo = readline_sync_1.default.question('Digite o modelo do carro: ');
    const ano = readline_sync_1.default.questionInt('Digite o ano do carro: ');
    const c = new Carro(modelo, ano);
    c.exibir();
    menu();
}
function tabuadaMultiplicar() {
    const num = readline_sync_1.default.questionInt('Digite um número para ver a tabuada: ');
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    menu();
}
function calculadoraIMC() {
    const peso = readline_sync_1.default.questionFloat('Digite o peso (kg): ');
    const altura = readline_sync_1.default.questionFloat('Digite a altura (m): ');
    const imc = peso / (altura ** 2);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    menu();
}
function validarSenha() {
    const senha = readline_sync_1.default.question('Digite uma senha: ', { hideEchoBack: true });
    if (senha.length >= 6)
        console.log('Senha válida!');
    else
        console.log('Senha muito curta!');
    menu();
}
function jogoAdivinharNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('Tente adivinhar o número entre 1 e 100!');
    let acertou = false;
    while (!acertou) {
        const chute = readline_sync_1.default.questionInt('Digite um número: ');
        if (chute === numeroSecreto) {
            console.log('Parabéns! Você acertou!');
            acertou = true;
        }
        else if (chute < numeroSecreto) {
            console.log('Mais alto!');
        }
        else {
            console.log('Mais baixo!');
        }
    }
    menu();
}
function contarPalavras() {
    const frase = readline_sync_1.default.question('Digite uma frase: ');
    const palavras = frase.trim().split(/\s+/);
    console.log(`Quantidade de palavras: ${palavras.length}`);
    menu();
}
menu();
