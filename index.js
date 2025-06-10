let valor, lado, result, base, altura, radio;

console.log("1.- Cuadrado \n 2.- Triangulo \n 3.- Rectangulo \n 4.- Circulo");
valor=int(input("Ingrese el número"))

switch (valor) {
    case 1:
        console.log("Digame el valor de los lados del cuadrado:");
        lado = int(input("Valor de lados"));
        result = lado * lado * lado * lado; 
        print("El area del cuadrado es: " + result)
        break;
    case 2:
        console.log("Digame la base del traingulo");
        base = int(input("Valor de base"));
        console.log("Dime la altura del traingulo:");
        altura = int(input("Valor de altura"));
        result = (base *altura) / 2;
        console.log("El área es: " + result)
        break;
    case 3:
        console.log("Digame la base del rectangulo");
        base = int(input("Valor de base"));
        console.log("Dime la altura del rectangulo:");
        altura = int(input("Valor de altura"));
        result = base * altura;
        console.log("El área es: " + result)
        break;

    case 4:
        console.log("Digame el radio del circulo:")
        radio = int(input("Dime el radio del circulo"))
        result = (3.14 * radio) ^2
        console.log("El área del circulo es: " + result)
        break;
}