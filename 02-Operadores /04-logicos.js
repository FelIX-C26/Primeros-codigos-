function sumar  (valor,valor1, valor2){
  return valor + valor1+ valor2;
}
console.log (`la suma es ${ sumar}`)
    
const restar = function (valor, valor2 ){
  return valor- valor2
}
let menor = restar( 8,9);
let validar= menor <= 2 ;
console.log(validar)


//como hacer una tabla de multiplicar 

 multi(6);
function multi (numero = 5 ) {
  for (let i=1 ; i<=12 ; i++){
    console.log (`${numero} x ${i}= ${numero*i}`)
  }
  }
  
  
//Crear una funcion que reciba como parametro tres numeros y retorne el mayor de los 3 
function mayor (valor1, valor2, valor3 ){
      let mayor; 
      if ( valor1> valor2 && valor1 > valor3){
        return valor1 
      }else if (valor2 > valor1 && valor2){
        return valor2
        }else {
          return valor3 
        }
      }
console.log (mayor(2, 4, 7 ))


//crea una funcione que reciba como parametro un numero y determina si es impar o par pero antes de hacerlo debe validar si el numero es positivo, debe retornar par o impar segun el numero ingresado.

function parI ( N1){
  if( N1 > 0 ){
   } if (N1 % 2=== 0 ){
    return "numero par"

   }else{
    return "numero impar"
   }
  
}
console.log (parI (5))

function Mayor1( n1, n2, n3 ){
  let Mayor;
  if(n1> n2 && n1> n3){
Mayor 
  }

}

//Crear una funcion que reciba como parametro dos valores e imprima una tabla de multiplicar 
// el valor seria el multiplo y el segundo el valor final 

function tablaDeMultiplicar(multiplo, valorFinal) {
  // Aseguramos que los parámetros sean números válidos
  if (typeof multiplo !== 'number' || typeof valorFinal !== 'number' || isNaN(multiplo) || isNaN(valorFinal)) {
    console.log("Por favor, ingrese dos números válidos.");
    return;
  }

  console.log(`Tabla de multiplicar del ${multiplo}:`);
  for (let i = 1; i <= valorFinal; i++) {
    const resultado = multiplo * i;
    console.log(`${multiplo} x ${i} = ${resultado}`);
  }
}

// Ejemplo de uso:
tablaDeMultiplicar(7, 10);
// Esto imprimirá la tabla del 7 hasta el 10.
 

//Crea una función llamada saludar que reciba un 
// nombre como parámetro e imprima en la consola un saludo 
// personalizado, por ejemplo: "¡Hola, Juan!".

  function saludar (nombre ){
return `hola ${nombre}`;
  }
  console.log(saludar("Juan"));
 // Define una función llamada sumar que tome dos
 //  números como parámetros y devuelva la suma de ambos.
  function sumar (numero1, numero2){
    return numero1 + numero2;
  }
  console.log(sumar(5, 10)); 

//Escribe una función llamada esMayor que acepte dos números y devuelva true si el primero
//  es mayor que el segundo, y false en caso contrario.

function esMayor(numero3, numero4) {
  if( numero3 > numero4) {
    return true;
  }
  return false;

}
console.log(esMayor(5, 10));

//. Área de un triángulo
//Crea una función calcularAreaTriangulo que reciba la base y
//  la altura de un triángulo y devuelva su área. (Fórmula: (base * altura) / 2).

function calcularAreaTriangulo(base, altura){
  return (base * altura) / 2;
}
console.log(calcularAreaTriangulo(5, 10));

//Diseña una función esPar que reciba un número como
//  parámetro y devuelva "Es par" si es un número par, 
// o "Es impar" si es un número impar. (Pista: usa el operador % para el módulo).
function espar ( parametro ){
  if (parametro % 2 === 0){
    return "es par";
  }else {
    return "es impar";
  }
}
console.log(espar(4)); 



function tablaDeMultiplicar(multiplo) {
  console.log(`Tabla de multiplicar del ${multiplo}:`);
  for (let i = 1; i <= 12; i++) {
    const resultado = multiplo * i;
    console.log(`${multiplo} x ${i} = ${resultado}`);
  }
}
// Ejemplo de uso:
tablaDeMultiplicar(5); 

//  Crea una función llamada Vocales que reciba un texto y retorne el número de vocales que contiene.
function Vocales (texto) {
  const vocales = 'aeiouAEIOU';
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  return `El número de vocales en "${texto}" es: ${contador}`;

}
console.log(Vocales(" mi nombre es Uestaquio"))


// Escribe un funcion llamada contarPP que reciba como parametro un numero inicial y un numero final,
// la funcion debe recorrer todo el rango y contar cuantos nukeros son pares y cuantos son impares,
// al final debe mostrar la cantidad de pares y la cantidad de impares. 
// ejecutar la funcion dos veces con valores diferentes.
function contarPP(NI,NF){
  let pares = 0;
  let impares = 0;
  for (let i= NI; i <= NF; i++){
    if (i % 2 === 0){
      pares++;
    }
    else {
      impares++;
    }
  }
  console.log(`Cantidad de pares: ${pares}, Cantidad de impares: ${impares}`);
}
// Ejecutar la función con diferentes valores
contarPP(1, 10);
contarPP(20, 30);



// Contar Positivos, Negativos y Ceros
//Crea una función llamada contarNumeros que reciba un arreglo (array) de números como parámetro. 
// La función debe recorrer el arreglo y contar cuántos números son positivos, cuántos negativos y cuántos son cero. 
// Al final, debe imprimir la cantidad de cada uno.

function contarNumeros( array){
  let positivos = 0;
  let negatvos = 0;
  let ceros = 0;
  for (let i = 0; i <= 10; i++){
    if (i > 0){
      positivos++;
    
  } else if (i < 0){
      negatvos++;
    } else {
      ceros++;
    }
  }
  console.log(`Cantidad de positivos: ${positivos}, Cantidad de negativos: ${negatvos}, Cantidad de ceros: ${ceros}`);
}
// Ejecutar la función con un arreglo de ejemplo
contarNumeros([5, -3, 0, 10, -8, 0, 7]);

//Crea una función llamada sumarParesEImpares que reciba un arreglo de números.
//  La función debe sumar todos los números pares en una variable y todos los números impares en otra. 
// Al final, debe imprimir la suma total de los pares y la suma total de los impares.
  
function sumarParesEimpares( array) {
  let sumapares = 0; 
  let sumaimpares = 0;
  for (let i= 0; i < 10; i++) {
    if (array[i] % 2 === 0) {
      sumapares += array[i];
    } else {
      sumaimpares += array[i];
    }
  }
  console.log(`Suma de pares: ${sumapares}, Suma de impares: ${sumaimpares}`);
}
// Ejecutar la función con un arreglo de ejemplo
sumarParesEimpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Escriba una función llamada calcular descuento que reciba dos parámetros precio del producto y categoría.
//  Las categorías son estudiantes adulto mayor General. 
// La función debe calcular el precio final aplicando los siguientes descuentos estudiante 20 % de descuento adulto mayor 15 % de descuento General sin descuento. 
// Además si el precio es mayor a 1000 pesos se aplica un descuento del 5 % adicional si el precio es menor a 1000 pesos retomar los valores sin descuento adicional

function calcularDescuento(precio, categoria) {
  let descuento = 0;

  switch (categoria) {
    case 'estudiante':
      descuento = 0.20;
      break;
    case 'adulto mayor':
      descuento = 0.15;
      break;
    case 'general':
      descuento = 0.00;
      break;
    default:
      console.log("Categoría no válida");
      return;
  }

  let precioFinal = precio - (precio * descuento);

  if (precio > 1000) {
    precioFinal -= (precioFinal * 0.05);
  }

  console.log(`El precio final es: $${precioFinal.toFixed(2)}`);
}
calcularDescuento(1200, 'estudiante'); // Ejemplo con estudiante
calcularDescuento(800, 'adulto mayor'); // Ejemplo con adulto mayor


//Escriba una función llamada calcular descuento que reciba dos parámetros precio del producto y categoría.
//  Las categorías son estudiantes adulto mayor General. 
// La función debe calcular el precio final aplicando los siguientes descuentos estudiante 20 % de descuento adulto mayor 15 % de descuento General sin descuento. 
// Además si el precio es mayor a 1000 pesos se aplica un descuento del 5 % adicional si el precio es menor a 1000 pesos retomar los valores sin descuento adicional

function calcularDescuento(precio, categoria) {
  const descuentos = { estudiante: 0.8, "adulto mayor": 0.85, general: 1 };
  return Math.round(precio * (descuentos[categoria.toLowerCase()] || 1) * (precio > 1000 ? 0.95 : 1) * 100) / 100;
}
console.log(calcularDescuento(1200, 'estudiante')); 

// Escribe un funcion llamada contarPP que reciba como parametro un numero inicial y un numero final,
// la funcion debe recorrer todo el rango y contar cuantos nukeros son pares y cuantos son impares,
// al final debe mostrar la cantidad de pares y la cantidad de impares. 
// ejecutar la funcion dos veces con valores diferentes.
function contarPP(NI,NF){
  let pares = 0;
  let impares = 0;
  for (let i= NI; i <= NF; i++){
    if (i % 2 === 0){
      pares++;
    }
    else {
      impares++;
    }
  } 
  console.log(`Cantidad de pares: ${pares}, Cantidad de impares: ${impares}`);
}

function tablademultiplicar(numero){
  console.log(`tablade multilplicar del ${numero}:`);
  for (let i = 1; i <= 12; i++){
    const resultado = numero * i;
    console.log(`${numero} x ${i} =${resultado}`);
  }
}
tablademultiplicar(2); 

function contarNumeros(array) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++;
    } else if (array[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  console.log(`Cantidad de positivos: ${positivos}, Cantidad de negativos: ${negativos}, Cantidad de ceros: ${ceros}`);
  return { positivos, negativos, ceros }; 
}
// Ejemplo de uso
contarNumeros([5, -3, 0, 10, -8, 0, 7]);

for(let i = 10; i >= 0; i--){
  if( i === 2){
    console.log("El numero es 2, se detiene el conteo");
    break; // Detiene el bucle cuando i es igual a 2
  }
}