export function ordenarArray(array: number[]) {
  if (array.length === 0) {
    console.log('O array está vazio. Use a opção 6 primeiro.');
  } else {
    const ordenado = [...array].sort((a, b) => a - b);
    console.log('Array ordenado:', ordenado);
  }
}