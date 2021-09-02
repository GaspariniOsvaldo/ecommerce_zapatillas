let nombre;

function volverHome() {
    location.href = "index.html";
}

function registrarUsuario() {
    nombre = $("#nombre").val();

    if (nombre) {
        localStorage.setItem("nombreUsuario", nombre);

        const URLGET = "https://jsonplaceholder.typicode.com/posts"

        const infoPost = {
            nombre: nombre
        };
        $.post(URLGET, infoPost, (respuesta, estado) => {
            if (estado === "success") {
                $(".iniciarSesion__form").slideUp("slow", "swing");
                $("#anuncioIniciasteSesion").html(`<h2>Listo! Ya estas registrado ${nombre} </h2>`);
                $("#anuncioIniciasteSesion").show("swing");
            }
        });
    };

    setTimeout(volverHome, 5000);
}

let btnRegistrarse = $("#registrarse");
btnRegistrarse.click(registrarUsuario);

/* animate({"right": "70vw"}, 2000) */