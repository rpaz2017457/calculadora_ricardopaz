// Autor: Ricardo Paz <rpaz-2017457@kinal.edu.gt>

const pantallaValorAnterior = document.getElementById('valorAnterior');
const pantallaValorAhora = document.getElementById('valorAhora');
const botonNumero = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorAhora)

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => pantalla.escribir(boton.value))
});