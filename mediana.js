function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }



let mediana;
   
function añadirSalarios(){
  const input1 = document.getElementById("salario1");
  const salarios = input1.value;
  let lista = salarios;
  let lista1 = lista.split(',').map(i=>Number(i));
  console.log (lista1)

  lista1.sort(function(a,b) {
    return a-b;
  });

  
  const mitadLista1 = parseInt(lista1.length / 2); 

  function esPar(numerito) {
    if (numerito % 2 === 0){
       return  true;
    }
    else {
      return false;
    }
   
   };
   
    
       if (esPar(mitadLista1)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
          
        console.log(elemento1, elemento2);
           mediana = promedioElemento1y2;
     
         }
   else{
       mediana = lista1[mitadLista1];
   }
   
  };

