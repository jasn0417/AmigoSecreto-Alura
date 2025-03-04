// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let nombres = [];

function agregarAmigo(){
    let nombre = document.querySelector("input")
    let agregarNombre = nombre.value;
    console.log(agregarNombre) 
    console.log(nombres)

    if (agregarNombre.length == 0){
        alert("Por favor, inserte un nombre.");
    }else{
        nombres.push(agregarNombre);
    }
    limpiarInput();
} 

function limpiarInput(){
    document.querySelector("#amigo").value = "";
}