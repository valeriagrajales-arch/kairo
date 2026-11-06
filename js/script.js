
var numeroWhatsapp = "573167134281";

var totalCarrito = 0;
var cantidadCarrito = 0;
var pedido = "";
var cantidadFavoritos = 0;

function abrirMenu() {
  document.getElementById("menu").classList.toggle("abierto");
}

function agregarAlCarrito(nombre, precio) {
  totalCarrito += precio;
  cantidadCarrito++;
  pedido += nombre + ", ";

  document.getElementById("listaCarrito").innerHTML +=
    "<li>" + nombre + " <span>$" + precio + "</span></li>";

  document.getElementById("contadorCarrito").innerHTML = cantidadCarrito;
  document.getElementById("totalCarrito").innerHTML = "$" + totalCarrito;
}

function vaciarCarrito() {
  totalCarrito = 0;
  cantidadCarrito = 0;
  pedido = "";

  document.getElementById("listaCarrito").innerHTML = "";
  document.getElementById("contadorCarrito").innerHTML = 0;
  document.getElementById("totalCarrito").innerHTML = "$0";
}

function finalizarPedido() {
  if (cantidadCarrito === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  var texto = "Hola KAIRO, quiero hacer este pedido: " + pedido +
    "Total: $" + totalCarrito;

  window.open("https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(texto));
}

function agregarFavorito(boton, nombre) {
  if (boton.innerHTML === "♡") {
    boton.innerHTML = "♥";
    boton.classList.add("activo");
    cantidadFavoritos++;

    document.getElementById("listaFavoritos").innerHTML +=
      "<li>" + nombre + "</li>";

    document.getElementById("contadorFavoritos").innerHTML = cantidadFavoritos;
  }
}

function borrarFavoritos() {
  cantidadFavoritos = 0;
  document.getElementById("listaFavoritos").innerHTML = "";
  document.getElementById("contadorFavoritos").innerHTML = 0;

  var corazones = document.getElementsByClassName("boton-favorito");

  for (var i = 0; i < corazones.length; i++) {
    corazones[i].innerHTML = "♡";
    corazones[i].classList.remove("activo");
  }
}

function abrirCarrito() {
  abrirPanel("panelCarrito");
}

function abrirFavoritos() {
  abrirPanel("panelFavoritos");
}

function abrirPanel(id) {
  cerrarPaneles();

  document.getElementById(id).classList.add("abierto");
  document.getElementById("fondoOscuro").classList.add("visible");
}

function cerrarPaneles() {
  document.getElementById("panelCarrito").classList.remove("abierto");
  document.getElementById("panelFavoritos").classList.remove("abierto");
  document.getElementById("fondoOscuro").classList.remove("visible");
}

function enviarMensaje() {
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;

  var texto = "Hola KAIRO, soy " + nombre + " (" + telefono + "). " + mensaje;

  window.open("https://wa.me/3167134281/" + numeroWhatsapp + "?text=" + encodeURIComponent(texto));
}
