// Funciones de Control de Flujo
function comprobarCalificacion() {
    const nota = document.getElementById("nota").value;
    const notaConvertida = Number(nota)
    if (notaConvertida >= 70) {
        document.getElementById('mensaje').textContent = "APROBADO";
    } else {
        document.getElementById('mensaje').textContent = "REPROBADO";
    }
}
function comprobarRangoEdad() {
    const edad = document.getElementById("edad").value;
    const rangoEdad = Number(edad)
    if (rangoEdad < 18) {
        document.getElementById('resultado').textContent = "Menor de edad";
    } else if (rangoEdad >= 18 && rangoEdad <= 30) {
        document.getElementById('resultado').textContent = "Adulto Joven";
    } else {
        document.getElementById('resultado').textContent = "Adulto mayor";
    }
}

function Dia_Semana() {
    const dia = new Date().getDay();
    let nombreDia;
    switch (dia) {
        case 0: nombreDia = "Domingo";
        break;
        case 1: nombreDia = "Lunes";
        break;
        case 2: nombreDia = "Martes";
        break;
        case 3: nombreDia = "Miércoles";
        break;
        case 4: nombreDia = "Jueves";
        break;
        case 5: nombreDia = "Viernes";
        break;
        case 6: nombreDia = "Sábado";
        break;
        default: nombreDia = "Día desconocido";
    }
    document.getElementById('dia').textContent = `Hoy es: ${nombreDia}`;
}
    function generarError() {
        try {
            throw new Error("Ha ocurrido un error.");
        } catch (error) {
            document.getElementById('errorMensaje').textContent = error.message;
        }
}
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function ObjetoError() {
    try {
        throw new CustomError("Este es un error personalizado");
    } catch (error) {
        document.getElementById('errorMS').textContent = error.message;
    }
}

// Funciones de Bucles e Iteración
function mostrarLista() {
    let text = "";

    for (let i = 0; i < 5; i++) {
      text += "El número es: " + i + "<br>";
    }
    
    document.getElementById("lista").innerHTML = text;
}

function generarNumeros() {
let text = "";
let i = 0;
while (i < 10) {
  text += "<br> El número es: " + i;
    i++;
}
document.getElementById("ciclo").innerHTML = text;
}

function GenerarNumerosDoWhile() {
    let result = '';
    let i = 0;
    
    do {
      i = i + 1;
      result = result + i;
    } while (i < 5);
    
    document.getElementById("ciclo2").innerHTML = result;

}

// Funciones
function saludar() {
    const nombre = document.getElementById("nombre").value;
    document.getElementById('saludar').textContent = `Hola ${nombre}`;
}

// Asignación y comparación
function calcularSuma() {
    let num1 = 5;
    let num2 = 10;
    const suma = num1 + num2;
    document.getElementById('suma').textContent = `La suma de ${num1} y ${num2} es ${suma}.`;
}

function calcularMultiplicacion() {
    let num1 = 2;
    let num2 = 5;
    const multiplicacion = num1 * num2;
    document.getElementById('mult').textContent = `El resultado de la multiplicación ${num1} * ${num2} es ${multiplicacion}.`;
}
function VerificarHorario() {
   let fecha = new Date();
   let hour = fecha.getHours(); //hora en formato 24 horas

   if (hour < 10 || hour > 18) {
    document.getElementById('hora').textContent = "La oficina está cerrada.";
   } else {
    document.getElementById('hora').textContent = "La oficina está abierta.";
   }
}
function ObjetoNumber() {
    let numString1 = "25";
    let numString2 = "30.5";

    let num1 = Number(numString1);
    let num2 = Number(numString2);

     let suma = num1 + num2;
     let producto = num1 * num2;

     let result = `
     Cadena 1: "${numString1}" → Número: ${num1} <br>
     Cadena 2: "${numString2}" → Número: ${num2} <br>
     Suma: ${num1} + ${num2} = ${suma} <br>
     Producto: ${num1} * ${num2} = ${producto}`;
 document.getElementById("result").innerHTML = result;
}

function ObjetoMath() {
let num = -10;
let absoluteValue = Math.abs(num);
let squareRoot = Math.sqrt(64);
let power = Math.pow(3, 4);
let randomNumber = Math.floor(Math.random() * 100) + 1;

let resul = `
Valor absoluto de ${num}: ${absoluteValue} <br>
Raíz cuadrada de 64: ${squareRoot} <br>
3 elevado a 4: ${power} <br>
Número aleatorio entre 1 y 100: ${randomNumber}
`;

 document.getElementById("resul").innerHTML = resul;
}
function ObjetoDate() {
    const fecha = new Date();
    document.getElementById('fecha').textContent = `Fecha actual: ${fecha.toLocaleString()}`;
}

//Formateo de texto
function CadenasLiterales() {
let string1 = 'Hola, mundo!'; // Usando comillas simples
let string2 = "¡Bienvenido a JavaScript!"; // Usando comillas dobles
let string3 = `Hoy es ${new Date().toLocaleDateString()}`; // Usando comillas invertidas

let mostarResultado =
`Resultado 1: ${string1} <br>
 Resultado 2: ${string2} <br>
 Resultado 3: ${string3} <br>`;

 document.getElementById("mostrarResultado").innerHTML = mostarResultado;
}

function ObjetoString() {
      
    let cadena = new String("Estamos usando JavaScript!");

      let longitudCadena = cadena.length;

      let cadenaMayuscula = cadena.toUpperCase();

      let obtenerPosicion = cadena.charAt(6);

      let ReemplazarPalabra = cadena.replace("usando", "utilizando");

      let resultadoCadena = `
          Cadena original: ${cadena} <br>
          Longitud de la cadena: ${longitudCadena} <br>
          Cadena en mayúsculas: ${cadenaMayuscula} <br>
          Carácter en la posición 5: ${obtenerPosicion} <br>
          Cadena modificada: ${ReemplazarPalabra}
      `;

      document.getElementById("resultadoString").innerHTML = resultadoCadena;
}

function MostrarEscuderiasF1() {
const cars = ["Red Bull Racing", " Ferrari", " Mclaren", " Aston Martin", " Mercedes" ];
document.getElementById("f1").innerHTML = cars;
}
function ArregloTipado() {
     let intArray = new Int8Array(3);

     intArray[0] = 10;
     intArray[1] = -20;
     intArray[2] = 30;

     //longitud del arreglo
     let length = intArray.length;

     let mostrar = `
         Int8Array: ${intArray.join(", ")} <br>
         Longitud del arreglo: ${length}
     `;

     document.getElementById("arrayTipado").innerHTML = mostrar;
}
// DOM
function modificarTexto() {
    document.getElementById('textoDom').textContent = "¡El texto ha sido cambiado!";
}
