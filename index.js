/* Inicio de sesion */

function inicioSesion() {
    let value;
    value = localStorage.getItem("nombreUsuario");
    if (value != null) {
        msgBienvenida = document.getElementById("bienvenida");
        msgBienvenida.innerHTML = "Bienvenid@ " + localStorage.getItem("nombreUsuario");
    } else {
        msgBienvenida = document.getElementById("bienvenida");
        msgBienvenida.innerHTML = `<a href="signIn.html">Inicia sesion</a>`
    }
}
inicioSesion();


/* Counter */

const counter = document.getElementById("counter");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

let count = 0;

inc.addEventListener("click", () => {
    count++;
    counter.value = count;
})

dec.addEventListener("click", () => {
    if (counter.value > 0) {
        count--;
        counter.value = count;
    }
})

/* Generar HTML */
class Zapatilla {
    constructor(id, marca, mod, precio) {
        this.id = id;
        this.marca = marca;
        this.mod = mod;
        this.precio = precio;
    }
}

const zapa1 = new Zapatilla(1, "Nike", "Pegasus 38", 3000);
const zapa2 = new Zapatilla(2, "Adidas", "React", 2450);
const zapa3 = new Zapatilla(3, "Puma", "Joyride", 3100);
const zapa4 = new Zapatilla(4, "Nike", "Jordan", 5000)

const listaZapatillas = [zapa1, zapa2, zapa3, zapa4];

function mostrarListaDeZapatillas() {
    for (const zapa of listaZapatillas) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<h3> Marca: ${zapa.marca}<h3>
        <p> Modelo: ${zapa.mod}<p>
        <p> Precio: $ ${zapa.precio}<p>
        <h6> ---------------------------------- <h6>`;

        document.body.appendChild(contenedor);
    }
}

const button = document.getElementById("btnShowSneakers");
button.addEventListener("click", mostrarListaDeZapatillas);
