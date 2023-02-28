// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numeroUno = parseInt(prompt("Ingrese el primer número:")); //1
let numeroDos = parseInt(prompt("Ingrese el segundo número:"));//2
let numerotres = parseInt(prompt("Ingrese el tercer número:"));//3

if (numeroUno > numeroDos){
    document.write(`El número mayor es: ${numeroUno}`);  
}else if(numeroDos > numerotres){
    document.write(`El número mayor es: ${numeroDos}`);
}else{
    document.write(`El número mayor es: ${numerotres}`);
}