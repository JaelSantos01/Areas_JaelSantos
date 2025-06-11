let lado, result, base, altura, radio;

function calcularAreas() {
    console.log("1.- Cuadrado \n2.- Triángulo \n3.- Rectángulo \n4.- Círculo");
    
    let valor = parseInt(prompt("Ingrese el número de la figura a calcular"));

    switch (valor) {
        case 1:
            lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado"));
            result = lado * lado;
            console.log("El área del cuadrado es: " + result);
            break;
        case 2:
            base = parseFloat(prompt("Ingrese la base del triángulo"));
            altura = parseFloat(prompt("Ingrese la altura del triángulo"));
            result = (base * altura) / 2;
            console.log("El área del triángulo es: " + result);
            break;
        case 3:
            base = parseFloat(prompt("Ingrese la base del rectángulo"));
            altura = parseFloat(prompt("Ingrese la altura del rectángulo"));
            result = base * altura;
            console.log("El área del rectángulo es: " + result);
            break;
        case 4:
            radio = parseFloat(prompt("Ingrese el radio del círculo"));
            result = Math.PI * Math.pow(radio, 2);
            console.log("El área del círculo es: " + result);
            break;
        default:
            console.log("Opción no válida.");
    }
}

calcularAreas();
