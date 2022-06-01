
//Código del cuadrado
console.group("Cudrados");

function perimetroCuadrado(lado){
    return lado* 4;

};

function AreaCuadrado(lado){
    return lado * lado ;
} 
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

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro)
    
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = AreaCuadrado(value);
    

}

 