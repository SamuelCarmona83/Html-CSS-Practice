// console.log("Script of conditionals! 🧙🏽‍♂️")
// Que es un condicional ? Intrusccion / Bloque codigo / Boleanos / desicion


let hussein = '29'; // falsy

let yarumis = 29; // thruthy

let endOfTheWorldDate = null;

// if(endOfTheWorldDate){
//     console.log("Truthy ✅")
// }else{
//     console.log("Falsy ⛔")
// }





//definicion de la funcion
function licuadora(alimento){ //parametro
    //devuelve la funcion
    if(alimento == false){
        return 'Ah ocurrido un error! 😥'
    }else if (alimento == undefined){
        return 'No se puede licuar el aire! 😳'
    }
    return 'Jugo de ' + alimento 
}

//ejecucion de la funcion
licuadora('🥭') // <- valor / argumento
licuadora('🍓')

console.log(licuadora())

