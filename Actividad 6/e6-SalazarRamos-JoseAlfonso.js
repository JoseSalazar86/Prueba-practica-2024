// hemos creado una variable global donde la utilizaremos dentro de la funcion
const number = 15;
// declaramos la funcion y sus variables
function ejercicio6() {
    /*Creamos las variables locales y el console paara mostrar el resultado*/
    let number2 = 6;
    let resultado = number * number2;
    console.log("El resultado es: "+resultado);
}
// llamamos a la funcion
ejercicio6();

/*La creación de variables globales y locales afecta en, que las variables globales las podemos utilizar en cualquier
* parte del codigo ya que como su nombre dice es una variable global para todo el codido mientras, que si utilizamos
* una variable local dentro de una funcion o dentro del metodo, como su nombre indica es solo local que solo la podremos
* usar en dicha funcion o en dicho metodo, es importante entender estos conceptos porque, sino los entendemos nos puedenç
* llevar a cometer errores como intentar llamar a una variable local fuera de la funcion o metodo*/