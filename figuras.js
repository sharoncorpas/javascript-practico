
//Código del cuadrado
console.group("Cudrados");

function perimetroCuadrado(lado){
    return lado* 4;

};

function AreaCuadrado(lado){
    return lado * lado ;
} ;
console.groupEnd("Cudrados");

//Código del triangulo
console.group("Triangulos");

function  perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;

};
 function areaTriangulo(base, altura){
    return (base * altura) / 2;

 };
console.groupEnd("Triangulos");

//Código del Circulo
console.group("Circulos");


function diametroCirculo (radio){
return radio * 2;
};

//PI

const PI = Math.PI;
console.log("PI ES: " + PI);


//Circunferencia
 function perimetroCirculo (radio){
     const diametro = diametroCirculo(radio);
     return diametro * PI;
   
};
function areaCirculo(radio){
  return (radio + radio) + PI;
}

console.groupEnd("Circulos");

//Interactuando con html

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro)
    
}
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area = AreaCuadrado(value);
    alert(area);
};
    
//Triangulo
 function calcularPerimetroTriangulo(){
   const ladoA = document.getElementById("ladoA");
   const lado1 = parseInt(ladoA.value);
   const ladoB = document.getElementById("ladoB");
   const lado2 = parseInt(ladoB.value);
   const baseTr = document.getElementById("baseTriangulo");
   const base = parseInt(baseTr.value);
    const perimetro  = perimetroTriangulo (lado1, lado2, base);
    alert (perimetro);
 };

 function calcularAreaTriangulo(){
    const baseTr = document.getElementById("baseTriangulo");
    const base = parseInt(baseTr.value);
    const alturaTriangulo = document.getElementById("alturaTriangulo");
    const altura = parseInt(alturaTriangulo.value);

    const area = areaTriangulo(base, altura);
    alert (area);

 };
  function calcularDiametroCirculo(){
      const radioCirculo = document.getElementById("radio");
      const radio = parseInt(radioCirculo.value);
      
      const diametro = diametroCirculo (radio);
      alert (diametro);
        
  };

  function calcularPerimetroCirculo(){
      const perimetroCirc = document.getElementById("radio");
      const radio = parseInt(perimetroCirc.value);

      const perimetro = perimetroCirculo (radio);
      alert(perimetro);
  };
  function calcularAreaCirculo(){
    const areaCirc = document.getElementById("radio");
    const radio = parseInt(areaCirc.value);

    const area = areaCirculo (radio);
    alert(area);


};