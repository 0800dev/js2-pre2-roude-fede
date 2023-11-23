// LOG IN 

const usuariosCreados = [
    {
        usuario: "EZEQUIEL",
        contrasenia: "CONTRADEEZE"
    },
    {
        usuario: "OTROUSUARIO",
        contrasenia: "OTRACONTRA"
    }
];

const usuario = {
    nombreDeUsuario: '',
    contrasenia: ''
}

usuario.nombreDeUsuario = prompt('Bienvenido! Ingrese su usuario: ').toUpperCase();
usuario.contrasenia = prompt('A continuacion ingrese su contrasenia').toUpperCase();

const validarUsuario = usuariosCreados.some((elemento) => {
    return usuario.nombreDeUsuario === elemento.usuario && usuario.contrasenia === elemento.contrasenia
})
if (validarUsuario) {
    alert("Inicio de sesion exitoso")
} else {
    alert("Los datos ingresados son incorrectos")
};

// carrito
const carrito = [];

//funcion carrito
const AgregarAlCarrito = (prenda) => {
    const confirmacion = prompt("Desea agregar al carrito?Ingrese si o no ")
    if (confirmacion == "si") {
        carrito.push(prenda)
    }
}

// funcion volver a comprar
function volverAComprar() {
    let preguntar = prompt("Desea volver a comprar?Por si o por no ")
    if (preguntar == "si") {
        simuladorInteractivo();
    } else {
        let verCarro = prompt("Desea ver el carrito? Ingrese si o no")
        if (verCarro == "si") {
            alert(JSON.stringify(carrito))
        }
    }
}

// seleccion de producto

const simuladorInteractivo = () => {
    const seleccionProducto = parseInt(prompt("Elegi una categoria:" + "\n" + "1.Remeras " + "\n" + "2.Jeans" + "\n" +
        "3.Hoodies" + "\n" + "4.Accesorios"));

    switch (seleccionProducto) {

        case 1: AgregarAlCarrito(products[0])
            break;

        case 2: AgregarAlCarrito(products[1])
            break;

        case 3: AgregarAlCarrito(products[2])
            break;

        case 4: AgregarAlCarrito(products[3])
            break;
    };
    volverAComprar();
};
simuladorInteractivo();




