// let edad = 17;
// // if (edad >= 18) {
// //     console.log("Eres mayor de edad");
// // }else {
// //     console.log("Eres menor de edad");
// // }
// //prompt("Presiona enter para continuar"); ventana para ingresar contenido
// //print("Fin del programa"); imprimir en documento
// //document.write("Hola"); imprime en documento
// let edad = 17, reserva = 0;
// if (edad >= 18 && reserva == true) {
//     console.log("Eres mayor de edad y tienes reserva");
// } else {
//     console.log("No tienes reserva y aparte eres menor de edad");
// }
// let edad = 15;
// let reserva = false;
// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }
// // Esta parte se ejecuta siempre, sin importar la edad
// if (reserva) {
//     console.log("Tienes reserva");
// } else {
//     console.log("No tienes reserva");
// }
let edad = 19;
let reserva = true;

if (edad >= 18) {
    console.log("Eres mayor de edad");

    if (reserva == true) {
        console.log("Tienes reserva");
    } else {
        console.log("No tienes reserva");
    }

} else {
    console.log("Eres menor de edad");
}

