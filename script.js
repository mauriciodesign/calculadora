
function add(value) {
	document.getElementById("resultado").innerHTML += value;
}

function borrar() {
	document.getElementById("resultado").innerHTML = "";
}

function calcular() {
	var operacion = eval(document.getElementById("resultado").innerHTML); 
	document.getElementById("resultado").innerHTML = operacion;
}

