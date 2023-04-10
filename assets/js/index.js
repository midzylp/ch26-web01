console.log("Sesion web");

function changeGreeting(){
    //obtener un nombre del cliente
    const clientName = getNameClient();
    //TODO obtener referencia de label h1
    const greetingReference = getReferenceOfIdGreetings();
    //TODO cambiar el saludo
    greetingReference.innerHTML = "Hola " + clientName;
}

function getNameClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGreetings (){
    return document.getElementById("greetings");
}