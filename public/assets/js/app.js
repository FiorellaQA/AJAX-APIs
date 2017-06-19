'use strict';

$(function () {

	var template = '<div class="bg-white center-box">' +
		'<p>Nombre: <span>__name__</span></p>' +
		'<p>Genero: <span>__genero__</span></p>' +
		'<p>Ciudad: <span>__city__</span></p>' +
		'<p>Dirección: <span>__street__</span></p>' +
		'<p>Email: <span>__email__</span></p>' +
		'<p>Celular: <span>__phone__</span></p>' +
			'</div>';

	var contenedorGeneral = $('#app-body');

	$('#btn').on('click',function (e) {

		$.getJSON('https://randomuser.me/api/', function (data) {
			console.log(data);
			var datos = data.results[0];
			//item(datos);


				var plantilla = template
					.replace('__name__',datos.name.first)
					.replace('__genero__',datos.gender)
					.replace('__city__',datos.location.city)
					.replace('__street__',datos.location.street)
					.replace('__email__',datos.email)
					.replace('__phone__',datos.cell);
				contenedorGeneral.append(plantilla);

		});

	});







});