let nombre;

nombre = document.getElementById("nombre");

function volverHome(){
    location.href = "index.html";
}

function registrarUsuario(){
    if(nombre) {
        localStorage.setItem("nombreUsuario", nombre.value);
        volverHome();
    }
}

let btnRegistrarse = document.getElementById("registrarse");
btnRegistrarse.addEventListener("click", registrarUsuario);