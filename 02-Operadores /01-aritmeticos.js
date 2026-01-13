function tablademultiplicar(n1,n2){
    for(let i=1;i<=n2;i++){
        console.log(n1+" x "+i+" = "+(n1*i));
    }
}
tablademultiplicar(5,10);

// Contar Positivos, Negativos y Ceros
//Crea una función llamada contarNumeros que reciba un arreglo (array) de números como parámetro. 
// La función debe recorrer el arreglo y contar cuántos números son positivos, cuántos negativos y cuántos son cero. 
// Al final, debe imprimir la cantidad de cada uno.

function contarnumeros(array){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 0; i <= 10; i++){
        if (array[i] > 0){
            positivos++;
        } else if (array[i] < 0){
            negativos++;
        } else {
            ceros++;
        }
    }
    console.log(`Cantidad de positivos: ${positivos}, Cantidad de negativos: ${negativos}, Cantidad de ceros: ${ceros}`);
}
// Ejecutar la función con un arreglo de ejemplo
contarnumeros([5, -3, 0, 10, -8, 0, 7]);

function compras(gasto, vip, estatus){
let descuento = 0.1;
if (gasto > 1000 && vip===true && estatus === "premium"){
    let total = gasto - (gasto * descuento);
    console.log("El total a pagar es: "+total);
}else {
    console.log("El total a pagar es: "+ gasto ** 2 );
}
}
compras(1500,true,"premium");
compras(800,false,"regular");
compras(1200,true,"regular");

function calcularpropina( monto, Cservicio){
    if (Cservicio === "excelente" ){
        console.log ("La propina es: "+ (monto * 0.20));
    }else if (Cservicio === "bueno" ){
        console.log ("La propina es: "+ (monto * 0.15));    
    }else if (Cservicio === "regular" ){    
        console.log ("La propina es: "+ (monto * 0.10));
    }else {
        console.log ("La propina es: 0" );
    }
}
calcularpropina(500,"excelente");


function calculadora(numero1){
    for (i=1;i<=12;i++){
        console.log(numero1+" x "+i+" = "+(numero1*i));
    }
}
calculadora(7);



function calcularPuntos(montoCompra, esPrimeraCompra) {
    let puntosGanados = montoCompra; // Cada dólar es 1 punto.
  
    if (esPrimeraCompra === true) {
      puntosGanados += 100; // Puntos extra por primera compra.
    }
  
    if (montoCompra > 500) {
      puntosGanados += 50; // Puntos extra por compra grande.
    }
  
    return puntosGanados;
  }
  console.log(calcularPuntos(600, true)); // Primera compra grande


  function caluladoraCE (montoT, esmienbro){
    let costo= 5 ;
    if (montoT > 75){
        console.log("El costo de envio es: 0");
    } else if (esmienbro === true){
        console.log("El costo de envio es: 0");
    } else {
        console.log("El costo de envio es: "+(costo + montoT));
    }
  }
    caluladoraCE(60,false);

    let num1 = 10; 
    let num2 = 20;
    if (num1 > num2) {
        console.log(`este numero es mayor: ${num1}`);
    } else if (num1 < num2){
        console.log(`este numero es mayor: ${num2}`);
    }else {
        console.log("Los numeros son iguales");
    }
    function calcularDescuento(precio, catalogo){
        let precioFinal;
        if (catalogo === "estudiante " && precio > 1000){ 
            console.log ("El precio final es:" + (precio - (precio * 0.25)))
        } else if (catalogo === "adulto mayor"&& precio > 1000){
            console.log ("El precio final es:" + (precio - (precio * 0.20)))
        }else{
            console.log("El precio final es:" + precio)
        }

    }
    calcularDescuento(1200,"estudiante ");
    calcularDescuento(800,"adulto mayor");
    calcularDescuento(1500,"regular");
    calcularDescuento(900,"estudiante ");


    
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



for(pasos=1; pasos<=25; pasos++){
    if(pasos % 5 === 0){
        console.log("escaneando el area");
    }else if(pasos === 15){
        console.log("encontraste un tesoro");
    }else if(pasos === 20){
        console.log("detecto una tampa ");
}
    else{
        console.log("sigue caminando");
    }
}

for(let i=10; i>=1; i--){
    console.log(i);
}
for(let i=1; i<=10; i++){
    console.log(i);
}
for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        console.log(i + " es un numero par");
    }else{
        console.log(i + " es un numero impar");
    }
}
for(let i=1; i<=10; i++){
    if(i === 5){
        console.log("Cinco es mi numero favorito");
    }else{
        console.log(i);
    }
}
for(let i=1; i<=10; i++){
    if(i === 7){
        console.log("siete es mi numero favorito");
    }else{
        console.log(i);
    }
}


function calculadora (n1,n2,operador){
    let resultado;
    switch(operador){
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if(n2 !== 0){
                resultado = n1 / n2;
            } else {
                return "Error: División por cero no permitida.";
            }
            break;
        default:
            return "Error: Operador no válido.";
    }
    return resultado;

}
console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 0, "/")); // Error: División por cero no permitida.
console.log(calculadora(10, 5, "/")); // 2
console.log(calculadora(10, 5, "%")); // Error: Operador no válido.
function esPrimo(numero) {
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; // Si es divisible por algún número, no es primo
    }
    return true; // Si no es divisible por ningún número, es primo
}

let i = 1;
while (i < 70 ){
    if( i> 50 && i%7=== 0){
        console.log (i)
    }
    i++
}