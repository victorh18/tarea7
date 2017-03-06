function geid(id){
	return document.getElementById(id);
}

function Datos(cA, cB, tV, tA){
	this.colorCalleA = cA;
	this.colorCalleB = cB;
	this.tiempoVerde = tV * 1000;
	this.tiempoAmarillo = tA * 1000;
	this.tiempoRojo = this.tiempoVerde + this.tiempoAmarillo;

}

cargarDatos();
var blverificar = true;
if(blverificar){
		setInterval(aver, 16000);
		blverificar = false;
	}

	function aver(){
		setTimeout(cambiarVerdeA, 5000);
		setTimeout(cambiarAmarilloA, 10000);
		setTimeout(cambiarRojoA, 13000);
		setTimeout(cambiarAmarilloB, 16000);
	}


function guardarDatos(){
	datos = JSON.stringify(info);
	datos = localStorage.setItem('datosSem', datos);

}

function cargarDatos(){
	datos = localStorage.getItem('datosSem');
	if (datos != null){
		info = JSON.parse(datos);
	}
}


//var timeoutRojoA = setTimeout(cambiarRojo, 3000);

function setCalleA(){
	cargarDatos();
	geid('bdCalleA').setAttribute('bgcolor', info.colorCalleA);
	/*if(blverificar){
		var myVar = setInterval(cambiarColores, 5000);
		blverificar = false;
		clearInterval(tInterval);
	}
	cargarDatos();
	//var myVar = setInterval(cambiarColores, 5000);
	geid('bdCalleA').setAttribute('bgcolor', info.colorCalleA);

	//pruebaTimeOut();*/


}

function setCalleB(){
	cargarDatos();
	geid('bdCalleB').setAttribute('bgcolor', info.colorCalleB);
	//pruebaTimeOut();
}

function cambiarColores(){
	/*intervalCalleA = setInterval(setCalleA, 100);
	intervalCalleB = setInterval(setCalleB, 100);
	tCalleA = info.colorCalleA;
	tCalleB = info.colorCalleB;
	var mytimeout = setTimeout(cambiarAmarilloA, 4000);
	clearInterval(intervalCalleA);

	info.colorCalleA = tCalleB;
	info.colorCalleB = tCalleA;
	guardarDatos();*/


}
	
function cambiarAmarilloA(){
	info.colorCalleA = "#FFFF00"
	guardarDatos();

}

function cambiarVerdeA(){
	info.colorCalleA = "#00FF00"
	info.colorCalleB = "#FF0000"
	guardarDatos();

}

function cambiarRojoA(){
	info.colorCalleA = "#FF0000"
	info.colorCalleB = "#00FF00"
	guardarDatos();
}

function cambiarAmarilloB(){
	info.colorCalleB = "#FFFF00"
	info.colorCalleA = "#FF0000"
	guardarDatos();
}

function alerta(){
	alert('lol >v');
}

/*function verificar(){
	usuario = geid("txtUsuario").value;
	password = geid("txtPassword").value;

	if(usuario == "admin" && password == "lol"){
		window.location.href = "<?php echo base_url('index.php/App/Admin2'); ?>"
	}

}
*/
