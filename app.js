// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombre = document.querySelector("input")
let listaAmigos = document.getElementById("listaAmigos")

let nombres = [];

function agregarAmigo(){
    
    let agregarNombre = nombre.value;
    console.log(agregarNombre) 
    console.log(nombres)

    if (agregarNombre.length == 0){
        alert("Por favor, inserte un nombre.");
    }else{
        nombres.push(agregarNombre);
        liNombre ();
        limpiarInput();
    }
    
} 

function limpiarInput(){
    document.querySelector("#amigo").value = "";
}

 function liNombre (){
    listaAmigos.innerHTML = "";



    for (let i = 0; i < nombres.length; i++){
        let li = document.createElement("li");
        li.innerHTML = nombres[i];
        listaAmigos.appendChild(li);
    }
 }

 function sortearAmigo (){
    
    
    let nombreGenerado = Math.floor(Math.random() * nombres.length);

    if (nombres.length === 0){
        alert ("No hay amigos agregados");
    } else {
        let amigoSorteado = nombres[nombreGenerado]
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;
        listaAmigos.innerHTML = "";
    }
    
 }