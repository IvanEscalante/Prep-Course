// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i = 0; i < array.length; i++){
    array[i] = array[i] + 1;
  }
      return array;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
  
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
   
   if  (array.includes(elemento) === true){
    return true;
   }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   var suma = 0;
  for(i = 0; i < numeros.length; i++){
      suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma_resultadosTest = 0;
  var promedio = 0;

  for(i = 0; i < resultadosTest.length; i++){
      suma_resultadosTest += resultadosTest[i];
      promedio = suma_resultadosTest / resultadosTest.length;
  }
  return promedio;
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var mayor = 0;
  var mayorNegativo = 0
  for (i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor ){
      mayor = numeros[i]
    }
    else (numeros[0] < mayorNegativo);
       mayorNegativo = numeros[i];
  
  }
    if (mayor >= 0){
      return mayor;
    }
    else return mayorNegativo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  var multiplicar = 1;

  if (arguments.length === 1){
    return arguments[0];
  }
  else if(arguments.length > 1) {
    for (var i = 0; i < arguments.length; i++){
     multiplicar = multiplicar * arguments[i];
    }
    return multiplicar;
  }
  else return 0;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var toremove = 18;
  arreglo = arreglo.filter(function(item){
          return item > toremove
  })
  return arreglo.length;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 7 || numeroDeDia === 1){
    return "Es fin de semana";
  }
  else if (numeroDeDia > 1 && numeroDeDia < 7){
    return "Es dia Laboral";
  }
  else return "Fuera de rango";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí                

  
  var numero = n;
  var myFunc = num => Number(num);
  
  var numeroArr = Array.from(String(numero), myFunc);

  if (numeroArr[0] === 9){
    return true;
  }
  else return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var suma = 0;

  for(i = 0; i < arreglo.length; i++){
    suma += arreglo[i];
  }
    if(suma / arreglo.length === arreglo[0]){
      return true;
    }
    else return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses =[]
  for (var i = 0; i < array.length ; i++){
      if(array[i]==="Enero" || array[i]==="Marzo" || array[i]==="Noviembre"){
        meses.push(array[i]);
      }
  }
  if(meses.length < 3 ){
      return 'No se encontraron los meses pedidos'
  }else{
  return meses;
        }
    
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  return newArray= array.filter(element => element >100);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  var arraySuma = [numero + 2];
  if(numero < -2){
    return "Se interrumpió la ejecución";
  }
  else for (i = 1; i < 10; i++){ 

   arraySuma.push(arraySuma[i-1] + 2);
   }
  
   return arraySuma;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  //var arraySuma = [numero + 2];
  //for (i = 1; i < 10; i++){ 
  //arraySuma.push(arraySuma[i-1] + 2);
  //}
  //return arraySuma;

    var i = 1;
    var arraySuma = [numero + 2];

     while (i < 10) {
     arraySuma.push(arraySuma[i-1] + 2);
     i++;
     }
     return arraySuma;
}
   




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
