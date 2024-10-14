function calculateMark() {
    try{
        let nota = parseInt(prompt("Ingresa una nota para saber tu calificacion"));
        if (nota < 0 || nota > 100) {
            alert("Numero fuera de rango");
        }

        if (nota >= 90 && nota <= 100) {
            alert("Calificacion de A.");
        }else if (nota >80 && nota <= 89) {
            alert("Calificacion de B.");
        }else if (nota >= 70 && nota <= 79) {
            alert("Calificacion de C.");
        } else if (nota >= 60 && nota <= 69) {
            alert("Calificacion de D.");
        } else{
            alert("Calificacion de F.");
        }

        /*switch(nota){
            case (nota >= 90 && nota <= 100):
                    alert("A");

                break;

            case 2:
                if(nota >80 && nota <= 89){
                    alert("B");
                }
                break;

            case 3:
                if(nota >= 70 && nota <= 79){
                    alert("C");
                }
                break;

            case 4:
                if(nota >= 60 && nota <= 69){
                    alert("D");
                }
                break;

            case 5:
                if(nota >=0 && nota <= 59){
                    alert("E");
                }
        }
*/

    }catch(err){
        alert(err);
    }

}

calculateMark();