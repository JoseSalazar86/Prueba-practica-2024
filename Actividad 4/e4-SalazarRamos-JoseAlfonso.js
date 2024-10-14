
let numero = parseInt(prompt("Introduce un numero a adivinar"));

let numeroAleatorio = Math.random() * 100 + 1;

while (numero !==  numeroAleatorio) {
    let numero = parseInt(prompt("Introduce un numero a adivinar"));
    if (typeof numero !== 'number') {
        alert("Dato erroneo")
    }
    if (numero > numeroAleatorio){
        alert("El numero que has instroducido es mayor.");
    } else if (numero < numeroAleatorio){
        alert("El numero que has instroducido es menor.");
    }else{
        alert("As adivinado el numero!!!!");
    }

}