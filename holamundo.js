var edad = 25;

if(edad === 18) {
    console.log("Puedes votar en las siguientes selecciones");
} else if(edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("No puedes votar");
}

// Else e if en una sola línea:
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy el número uno" : "No soy uno";
console.log(resultado);


//Juego de piedra papel tijera

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var resultado = function(user, cpu ) {
    if (user != cpu) {
        if(user === piedra && cpu === tijera) {
            console.log(user + "gana con" + piedra);        
        } else if(user === papel && cpu === piedra) {
            console.log(user + "gana con" + papel);
        } else if(user === tijera && cpu === papel ) {
            console.log(user + "gana con" + tijera);
        } else {
            console.log("La " + "cpu ha ganado");
        }
    } else {
        console.log("Ha sido un empate");
    }  
    console.log(resultado);
}
