function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }


const lista1 = [

];
   
function calculaLaMedianaSalarial(){
  const input1 = document.getElementById("salario1");
  const sal1 = parseInt(input1.value);

  const input2= document.getElementById("salario2");
  const sal2 = parseInt(input2.value);
  
  const input3= document.getElementById("salario3");
  const sal3 = parseInt(input3.value);

  const input4 = document.getElementById("salario4");
  const sal4 = parseInt(input4.value);


  const añadirSalarios = lista1.push(sal1, sal2, sal3, sal4);

  const ordenarSalarios = lista1.sort(function(a,b){
    return a - b; 
  });

  console.log (lista1)

  const mitadLista1 = parseInt(lista1.length / 2); 
  alert (mitadLista1);

}

/*const mitadLista1 = parseInt(lista1.length / 2); 

 function esPar(numerito) {
   if (numerito % 2 === 0){
      return  true;
   }
   else {
     return false;
   }

 };

 let mediana; 

 
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      }
else{
    mediana = lista1[mitadLista1];
}*/