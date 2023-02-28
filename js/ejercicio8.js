//Escribe un programa que pida un número y diga si es divisible por 2
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0){
    document.write(`El número ${numero} SI es divisible por 2`);
}else{
    document.write(`El número ${numero} NO es divisible por 2`);
}