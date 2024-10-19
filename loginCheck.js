const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in")
const loggedInputs = document.querySelectorAll(".card");

export const loginCheck = (user) => {
    if(user){//Se a iniciado sesión
        loggedInLinks.forEach((link) => (link.style.display = "block"));//Visible(SALIR)
        loggedOutLinks.forEach((link) => (link.style.display= "none"));//No se debe ver(INGRESAR)
        loggedInputs.forEach((div) => (div.style.display= "block"));//Mostrar tarjetas
    } else{//No se inicio sesión
        loggedInLinks.forEach((link) => (link.style.display = "none"));//No se debe ver(SALIR)
        loggedOutLinks.forEach((link) => (link.style.display= "block"));//Visible(INGRESAR/REGRESAR)
        loggedInputs.forEach((div) => (div.style.display= "none"));//No se muestran las tarjetas
    }
}