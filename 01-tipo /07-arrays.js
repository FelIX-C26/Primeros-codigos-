let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[2]);
frutas[1] = "Mango";//modifica el valor del array en la posicion 1
console.log(frutas);

let frutas2 =["naranja", "kiwi" ,"pera"];
for(let i=0; i< frutas2.length; i++){
    console.log(frutas2[i]);
}
frutas2.push("sandia");//agrega un elemento al final del array
console.log(frutas2); 
frutas2.pop();  //elimina el ultimo elemento del array          
console.log(frutas2);
frutas2.unshift("fresa");//agrega un elemento al inicio del array
console.log(frutas2);
frutas2.shift(); //elimina el primer elemento del array
frutas2.slice(1,3); //extrae una seccion del array y devuelve un nuevo array
frutas2.splice(1,1); //elimina elementos del array y opcionalmente los reemplaza


//Crea un array de números enteros 
// llamado numeros con al menos 5 elementos.
//Usa un bucle para sumar todos los
//  elementos del array y guarda el resultado en una variable llamada total.
//Imprime el valor de total.


let numeros=[1,2,3,4,5]; 
let total = 0;
for (let i=0; i< numeros.length; i++){
    total += numeros[i];
}
console.log("La suma de los numeros es: "+ total);

//Verifica si el número 3 está presente en el array numeros.
if( numeros.includes(3)){
    console.log("El numero 3 esta en el array");
}else{
    console.log("El numero 3 no esta en el array");
}
//Encuentra el mayor y el menor número en el array numeros.
let mayor = Math.max(...numeros);//operador spread (...) para pasar los elementos del array como argumentos individuales a la función Math.max
let menor = Math.min(...numeros);
console.log("El numero mayor es: "+ mayor);
console.log("El numero menor es: "+ menor);

//array invertido
let invertido = numeros.reverse();//invierte el orden de los elementos del array
console.log("Array invertido: "+ invertido);

//Ordenar el array numeros en orden ascendente.
let ascendente = numeros.sort((a,b) => a-b);//ordena los elementos del array en orden ascendente
console.log("Array en orden ascendente: "+ ascendente);
//Ordenar el array numeros en orden descendente.
let descendente = numeros.sort((a,b) => b-a);//ordena los elementos del array en orden descendente
console.log("Array en orden descendente: "+ descendente);

//array multidimensional
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("Matriz: "+ matriz);
console.log("Elemento en la fila 1, columna 2: "+ matriz[0][1]);//acceder al elemento en la fila 1, columna 2
console.log("Elemento en la fila 3, columna 3: "+ matriz[2][2]);//acceder al elemento en la fila 3, columna 3
//Recorrer la matriz y sumar todos los elementos


let numerosenteros=[1,2,3,4,5,6,7,8,9,10];
let pares=0;
for(let i=0;  i < numerosenteros.length; i++){
    if(numerosenteros[i] % 2 === 0){
        pares += numerosenteros[i];
        console.log("Numero par: "+ numerosenteros[i]);
    }
}
let animales=["perro", "gato", " loro"];
