import readlineSync from 'readline-sync';

export function validarSenha() {
  const senha = readlineSync.question('Digite uma senha: ', { hideEchoBack: true });
  if (senha.length >= 6) console.log('Senha válida!');
  else console.log('Senha muito curta!');
}
