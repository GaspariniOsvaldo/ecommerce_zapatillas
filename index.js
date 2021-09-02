/* Toma de datos del Local Storage para mostrar nombre de usuario */

function inicioSesion() {
    let nombre = localStorage.getItem("nombreUsuario");
    let msgBienvenida = $("#bienvenida");

    if (nombre != null) {
        msgBienvenida.html(`<a href="signIn.html">Bienvenid@ ${localStorage.getItem("nombreUsuario")} </a>`);
    } else {
        msgBienvenida.html(`<a href="signIn.html">Inicia sesion</a>`);
    }
}

inicioSesion();

/* Contador */

let counter = $("#counter");
let inc = $("#inc");
let dec = $("#dec");

let count = 0;

inc.click(() => {
    count++;
    counter.val(count);
});

dec.click(() => {
    if (counter.val() > 0) {
        count--;
        counter.val(count);
    }
});


/* Activar carrito de compras */

function detectarCompra() {
    $(".activarCarrito").click(() => {
        if ($('.activarCarrito').is(':checked')) {
            $("#msgCarritoVacio").hide();
            $(".bxs-cart").show();
        } else {
            $(".bxs-cart").hide();
            $("#msgCarritoVacio").show();
        }
    })
}

detectarCompra();