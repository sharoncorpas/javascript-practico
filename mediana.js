//MEDIA SALARIAL

function calcularMediaAritmetica(){


  const input1 = document.getElementById("salario1");
  const salarios = input1.value;
  let lista = salarios; 
  let lista1 = lista.split(',').map(i=>Number(i));
  console.log (lista1)

    const sumaLista = lista1.reduce(
     function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;

     }
    
    ) ;

    const promediolista = sumaLista / lista1.length;
     console.log(promediolista);
};

//MEDIANA SALARIAL

function calcularMedia(lista){

    const sumaLista = lista.reduce(
     function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;

     }

    ) ;

   const promediolista = sumaLista / lista.length;
   return promediolista;
};


let mediana;
   
function calcularMediana(){
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
        const promedioElemento1y2 = calcularMedia([elemento1, elemento2,]);
          
        console.log(elemento1, elemento2);
           mediana = promedioElemento1y2;
     
         }
   else{
       mediana = lista1[mitadLista1];
   }
   
  };


  //MODA

  const lista1Count = {}

 function calcularModa(){  

    const input1 = document.getElementById("salario1");
    const salarios = input1.value;
    let lista = salarios;
    let lista1 = lista.split(',').map(i=>Number(i));
    console.log (lista1)

lista1.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] +=1;
        }
        else {
            lista1Count[elemento] =1;
        }
    }
);

const lista1Array =  Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    });
    console.log(lista1Array);
    
const moda = lista1Array[lista1Array.length - 1];
console.log(moda);
};