# Menu

Este programa em TypeScript apresenta um menu interativo no terminal, onde o usuário pode escolher entre 18 exercícios diferentes para executar. Cada exercício é uma função que realiza uma tarefa específica, geralmente envolvendo entrada de dados, cálculo e exibição de resultados.

Descrição dos Exercícios
Soma de dois números
Pede dois números ao usuário, soma-os e exibe o resultado.

Verificar se é par ou ímpar
Recebe um número e informa se ele é par ou ímpar.

Calcular a média de três notas
Recebe três notas numéricas, calcula a média aritmética e mostra o resultado com duas casas decimais.

Converter Celsius para Fahrenheit
Pede uma temperatura em Celsius, converte para Fahrenheit usando a fórmula F = C * 1.8 + 32 e exibe o resultado.

Exibir números pares de 1 a 20
Imprime no console todos os números pares entre 1 e 20.

Ler 5 números e armazenar em um array
Solicita 5 números ao usuário, armazena-os em um array e exibe o array preenchido.

Encontrar o maior número do array anterior
Verifica o maior valor do array preenchido no exercício anterior e exibe. Caso o array esteja vazio, avisa para preencher primeiro.

Contar vogais em uma string
Recebe uma frase ou palavra, conta todas as vogais (incluindo acentuadas) e mostra a quantidade.

Calculadora simples
Recebe dois números e um operador (+, -, *, /) e realiza a operação, tratando divisão por zero e operadores inválidos.

Ordenar o array em ordem crescente
Ordena o array preenchido no exercício 6 em ordem crescente e exibe o resultado. Se o array estiver vazio, avisa para preenchê-lo.

Classe Pessoa simples
Solicita nome e idade para criar um objeto da classe Pessoa e exibe uma mensagem de apresentação.

Classe Aluno simples
Solicita nome e matrícula para criar um objeto da classe Aluno e exibe seus dados.

Classe Carro simples
Recebe modelo e ano para criar um objeto Carro e exibe as informações.

Tabuada de multiplicar
Pede um número e imprime a tabuada de multiplicação de 1 a 10.

Calculadora IMC
Calcula o Índice de Massa Corporal (IMC) a partir do peso e altura fornecidos, exibindo o resultado com duas casas decimais.

Validar uma senha simples
Pede uma senha e valida se ela tem pelo menos 6 caracteres.

Jogo de adivinhar o número
Gera um número aleatório entre 1 e 100 e permite que o usuário tente adivinhar, dando dicas se o chute deve ser maior ou menor até acertar.

Contar palavras em uma string
Recebe uma frase e conta o número de palavras presentes, considerando separação por espaços.

Fluxo geral do programa
O menu é exibido a cada finalização de exercício, esperando uma nova opção.

Quando uma opção válida é selecionada, a função correspondente é chamada.

Após a execução do exercício, o menu reaparece para nova escolha.

A opção 0 encerra o programa.

Estrutura das funções
Cada função segue um padrão:

Recebe entradas do usuário via readline-sync.

Processa dados ou realiza cálculos.

Exibe resultados no console.

Chama menu() novamente para repetir o ciclo.
