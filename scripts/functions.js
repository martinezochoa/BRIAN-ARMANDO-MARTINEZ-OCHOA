//declaro una funcion denombre sumar sin parametros
funcion SVGAnimatedEnumeration(){
    //vinculador let
    //num es el nombrte delavariable
    //parseFloat vamos a convertir anumero decimal
    //delid num1 noas traemos el valor
    let num1 =preseFloat (document.getElementById("num1").value);
    let num2 =preseFloat (document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").textContent = "El resultado es:" + result;
};