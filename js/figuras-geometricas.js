var mensaje = document.getElementById('answer-message');

//cuadrado
var ladoCuadrado = document.getElementById('cuadrado');
var btnPerimetroCuadrado = document.getElementById('btnPerimetro_cuadrado');
var btnAreaCuadrado = document.getElementById('btnArea_cuadrado');

btnAreaCuadrado.addEventListener('click', function(){    
    let cuadrado = Number(ladoCuadrado.value);
    let areaCuadrado = cuadrado*cuadrado;
    mensaje.innerHTML = `El área del cuadrado es ${areaCuadrado} centímetros cuadrados.`;
});

btnPerimetroCuadrado.addEventListener('click', function(){
    let cuadrado = Number(ladoCuadrado.value);
    let perimetroCuadrado = cuadrado*4;
    mensaje.innerHTML = `El perímetro del cuadrado es ${perimetroCuadrado} centímetros.`;
});

//triangulo
var ladoTrianguloUno = document.getElementById('side1');
var ladoTrianguloDos = document.getElementById('side2');
var ladoTrianguloTres = document.getElementById('side3');
var baseTriangulo = document.getElementById('base_triangulo');
var alturaTriangulo = document.getElementById('altura_triangulo');

var btnPerimetroTriangulo = document.getElementById('btnPerimetro_triangulo');
var btnAlturaTriangulo = document.getElementById('btnAltura_triangulo');

btnPerimetroTriangulo.addEventListener('click', function(){
    let triangulo1 = Number(ladoTrianguloUno.value);
    let triangulo2 = Number(ladoTrianguloDos.value);
    let triangulo3 = Number(ladoTrianguloTres.value);
    let perimetroTriangulo = triangulo1 + triangulo2 + triangulo3;
    mensaje.innerHTML = `El perímetro del triángulo es ${perimetroTriangulo} centímetros.`
});

btnAlturaTriangulo.addEventListener('click', function(){
    let baseT = Number(baseTriangulo.value);
    let alturaT = Number(alturaTriangulo.value);
    let areaT = 0.5*baseT*alturaT;
    mensaje.innerHTML = `El área del triángulo es ${areaT} centímetros cuadrados.`;
});

//circulo
var radioCirculo = document.getElementById('radio');
var btnDiametroCirculo = document.getElementById('btnCirculo_diametro');
var btnPerimetroCirculo = document.getElementById('btnCirculo_perimetro');
var btnAreaCirculo = document.getElementById('btnCirculo_area');

btnPerimetroCirculo.addEventListener('click', function(){
    let radioC = Number(radioCirculo.value);
    let perimetroC = (2*3.141592653589793238462643383279502884*radioC).toFixed(2);
    mensaje.innerHTML = `El perímetro del círculo es ${perimetroC} centímetros.`;
});

btnDiametroCirculo.addEventListener('click', function(){
    let radioC = Number(radioCirculo.value);
    let diametroC = 2*radioC;
    mensaje.innerHTML = `El diámetro del círculo es ${diametroC} centímetros.`;
});

btnAreaCirculo.addEventListener('click', function(){
    let radioC = Number(radioCirculo.value);
    let areaC = (3.141592653589793238462643383279502884*radioC*radioC).toFixed(2);
    mensaje.innerHTML = `El área del círculo es ${areaC} centímetros cuadrados.`;
});






