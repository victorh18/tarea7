<?php 
	$mensaje = "";

	$CI =& get_instance();
	if($_POST){
		
		$mensaje = "Persona registrada";

	}


?>

<html lang 'es'>
<head>
	<title>Administracion del semaforo</title>
	<script type="text/javascript" src="<?php echo base_url(); ?>js/code.js"></script>
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<table>
		<tr>
			<td>
				Usuario
			</td>

			<td>
				<input id="txtUsuario" />
			</td>

		</tr>

		<tr>
			<td>
				Contraseña
			</td>
			<td>
				<input id="txtPassword" />
			</td>

		</tr>

		<tr>
			<td>
				<button onclick="verificar();">Entrar</button>
			</td>
			<td>
				<button>Regresar</button>

			</td>

		</tr>

	</table>

</body>
</html>