import readlineSync from 'readline-sync';


import { somaDoisNumeros } from './exercicio1';
import { parOuImpar } from './exercicio2';
import { mediaTresNotas } from './exercicio3';
import { celsiusParaFahrenheit } from './exercicio4';
import { exibirPares } from './exercicio5';
import { lerNumerosArray, maiorNumeroArray, ordenarArray } from './exercicio6'; 
import { contarVogais } from './exercicio8';
import { calculadoraSimples } from './exercicio9';
import { classePessoa } from './exercicio11';
import { classeAluno } from './exercicio12';
import { classeCarro } from './exercicio13';
import { tabuadaMultiplicar } from './exercicio14';
import { calculadoraIMC } from './exercicio15';
import { validarSenha } from './exercicio16';
import { jogoAdivinharNumero } from './exercicio17';
import { contarPalavras } from './exercicio18';


let arrayNumeros: number[] = [];

async function menu() {
  while (true) {
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

    const opcao = readlineSync.question('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        somaDoisNumeros();
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
        arrayNumeros = lerNumerosArray();
        break;
      case '7':
        maiorNumeroArray(arrayNumeros);
        break;
      case '8':
        contarVogais();
        break;
      case '9':
        calculadoraSimples();
        break;
      case '10':
        ordenarArray(arrayNumeros);
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
      default:
        console.log('Opção inválida!');
    }
  }
}

menu();
