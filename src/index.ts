/*sumar los elemntos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
El arreglo tiene dimension 6 y los numeros de los dos
vectores los carga el usuario*/
let numerosUno: number;
let arrUno: number[] = new Array(6);
let arrDos: number[] = new Array(6);
let suma: number[] = new Array(6);
for (let i: number = 0; i < arrUno.length; i++) {
  numerosUno = Number(prompt("ingrese un numero para el primero"));
  arrUno[i] = numerosUno;

  let numerosDos: number;
  numerosDos = Number(prompt("ingrese un numero para el segundo"));
  arrDos[i] = numerosDos;

  suma[i] = arrUno[i] + arrDos[i];
}

console.log(arrUno);
console.log(arrDos);

console.log(suma);
