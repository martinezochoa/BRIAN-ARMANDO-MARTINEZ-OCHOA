/* 2.10 */
function calcularAgua(){

    let metros =
    parseFloat(document.getElementById("metros").value);

    let costo =
    parseFloat(document.getElementById("costo").value);

    let total = metros * costo;

    document.getElementById("resultado").innerHTML =
    "Pago total: $" + total.toFixed(2);
}

/* 2.11 */
function calcularLuz(){

    let kw =
    parseFloat(document.getElementById("kw").value);

    let precio =
    parseFloat(document.getElementById("precio").value);

    let total = kw * precio;

    document.getElementById("resultado").innerHTML =
    "Pago total: $" + total.toFixed(2);
}

/* 2.12 */
function calcularArticulo(){

    let precio =
    parseFloat(document.getElementById("articulo").value);

    let descuento = precio * 0.20;

    let subtotal = precio - descuento;

    let iva = subtotal * 0.15;

    let total = subtotal + iva;

    document.getElementById("resultado").innerHTML =
    "Con descuento: $" + subtotal.toFixed(2) +
    "<br>Total final: $" + total.toFixed(2);
}

/* 2.13 */
function calcularAhorro(){

    let sueldo =
    parseFloat(document.getElementById("sueldo").value);

    let ahorro = sueldo * 0.15 * 4 * 12;

    document.getElementById("resultado").innerHTML =
    "Ahorro anual: $" + ahorro.toFixed(2);
}

/* 2.14 */
function calcularCheque(){

    let dias =
    parseFloat(document.getElementById("dias").value);

    let hotel =
    parseFloat(document.getElementById("hotel").value) * dias;

    let comida =
    parseFloat(document.getElementById("comida").value) * dias;

    let extras = dias * 100;

    let total = hotel + comida + extras;

    document.getElementById("resultado").innerHTML =
    "Hotel: $" + hotel.toFixed(2) +
    "<br>Comida: $" + comida.toFixed(2) +
    "<br>Extras: $" + extras.toFixed(2) +
    "<br>Total: $" + total.toFixed(2);
}

/* 2.15 */
function calcularPotencia(){

    let r =
    parseFloat(document.getElementById("r").value);

    let i =
    parseFloat(document.getElementById("i").value);

    let v = r * i;

    let p = v * i;

    document.getElementById("resultado").innerHTML =
    "Voltaje: " + v.toFixed(2) +
    "<br>Potencia: " + p.toFixed(2);
}

/* 2.16 */
function calcularArea(){

    let lado =
    parseFloat(document.getElementById("lado").value);

    let area = lado * lado;

    document.getElementById("resultado").innerHTML =
    "Área: " + area.toFixed(2);
}

/* 2.17 */
function calcularPromedio(){

    let e1 =
    parseFloat(document.getElementById("e1").value);

    let e2 =
    parseFloat(document.getElementById("e2").value);

    let e3 =
    parseFloat(document.getElementById("e3").value);

    let promedio =
    (e1*0.25)+(e2*0.25)+(e3*0.50);

    document.getElementById("resultado").innerHTML =
    "Promedio: " + promedio.toFixed(2);
}

/* 2.18 */
function calcularVida(){

    let edad =
    parseFloat(document.getElementById("edad").value);

    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;

    document.getElementById("resultado").innerHTML =
    "Meses: " + meses +
    "<br>Semanas: " + semanas +
    "<br>Días: " + dias +
    "<br>Horas: " + horas;
}

/* 2.19 */
function calcularLlamada(){

    let minutos =
    parseFloat(document.getElementById("minutos").value);

    let costo =
    parseFloat(document.getElementById("costoMin").value);

    let total = minutos * costo;

    document.getElementById("resultado").innerHTML =
    "Costo total: $" + total.toFixed(2);
}

/* 2.20 */
function calcularHotel(){

    let dias =
    parseFloat(document.getElementById("diasHotel").value);

    let precio =
    parseFloat(document.getElementById("precioDia").value);

    let total = dias * precio;

    document.getElementById("resultado").innerHTML =
    "Total a pagar: $" + total.toFixed(2);
}