const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');/**Se guardan todos los */

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	pais: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	departamento: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	numeroIdentificacion: /^\d{8,11}$/, // 7 a 14 numeros.
	fechaNacimiento: /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/
}

const campos = {
	nombre: false,
	apellido:false,
	pais:false,
	departamento:false,
	correo: false,
	telefono: false,
	numeroIdentificacion: false,
	fechaNacimiento: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "numeroIdentificacion":
			validarCampo(expresiones.numeroIdentificacion, e.target, 'numeroIdentificacion');
		break;
		case "fecha":
			validarCampo(expresiones.fechaNacimiento, e.target, 'fechaNacimiento');
		break;

		case "pais":
			validarCampo(expresiones.pais, e.target, 'pais');
		break;

		case "departamento":
			validarCampo(expresiones.departamento, e.target, 'departamento');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		//case "fechaNacimiento":
		//	validarCampo(expresiones.fechaNacimiento, e.target, 'fechaNacimiento');
		//break;
		
	}
}
//**nos va a comprobar que todo este correcto bien digitado */
const validarCampo = (expresion, input, campo) => {
  /*	if (input.value== null){
		//si el valor nose ha digitado, algun campo esta vacio 
		alert("campo vacio ");
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;

	} else */

	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarCampoCondicion = (cumpleCondicion , campo) => {
	 if(cumpleCondicion){
		//alert("thay algun campo lleno ");
		//alert("campo vacio1 ");
		 //cuando se ha colocado informacion en el campo 
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		//document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		//document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		//alert("campo vacio 1 ");
		// cuando esta vacio el campo
		//alert("campo vacio 2");
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
	//	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



//validar apenas se oprime por este secttor
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
//terminos y condiciones
	const terminos = document.getElementById('terminos');
	//genero
	const generoMasculino = document.getElementById('genero_m');
	const generoFemenino = document.getElementById('genero_f');
    const generoChecked =  generoMasculino.checked || generoFemenino.checked;
	//identificacion
 	const identificacion_cc = document.getElementById('identificacion_cc');
 	const identificacion_pas = document.getElementById('identificacion_pas');
//	const identificacionChecked  = identificacion_cc.checked || identificacion_pas.checked;
	const identificacionChecked =  identificacion_cc.checked || identificacion_pas.checked;
//nacionalidad
	const nacionalidadCol = document.getElementById('nacionalidad_col');
	const nacionalidadExt = document.getElementById('nacionalidad_ext');
    const nacionalidadChecked =  nacionalidadCol.checked || nacionalidadExt.checked;
	
	const btn = document.getElementById('btn');

	if(campos.nombre  && campos.apellido && campos.numeroIdentificacion && identificacionChecked && nacionalidadChecked  && generoChecked
	&& campos.pais && campos.departamento && campos.telefono && campos.correo && terminos.checked  ){
		//&& campos.fechaNacimiento
		formulario.reset();
	//* direccion corespondencia  */
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
			formulario.reset();
		});
	} else {
		//verificar si algun campo esta vacio 
			//
		
			//validarCampoCondicion(campos.fechaNacimiento,"fechaNacimiento" );
			validarCampoCondicion(campos.nombre,"nombre" );
			validarCampoCondicion(campos.apellido,"apellido" );
			validarCampoCondicion(campos.numeroIdentificacion,"numeroIdentificacion" );
		
			//console.log("nacionalidadChecked "+ nacionalidadChecked);
			//console.log("generoChecked "+ generoChecked);
			validarCampoCondicion(nacionalidadChecked,"nacionalidad" );
			validarCampoCondicion(generoChecked,"genero" );
			validarCampoCondicion(identificacionChecked,"identificacion" );
			validarCampoCondicion(campos.pais,"pais" );
			validarCampoCondicion(campos.departamento,"departamento");
			validarCampoCondicion(campos.telefono,"telefono");
			//validarCampoCondicion(campos.fechaNacimiento,"fechaNacimiento");
			validarCampoCondicion(campos.correo,"correo");
			validarCampoCondicion(terminos.checked,"terminos");

		//se verifica si hay error o si nose ha
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		//
	
	
	//	alert("campo vacio 3 ");
	}
});
///funcion cargar imagen
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});
function imageIsLoaded() { 
  //alert(this.src);  // blob url
  // update width and height ...
}


//<script>
  //  $('.datepicker').datepicker().on('changeDate', function(e) {
        // el objeto 'e' contiene toda la información que necesitas
        // haz un 'console.log(e);' para ver sus contenidos
    //});
//</script>

/*function comprobarFechaRango(fecha1, fecha2, fecha3){
	return fecha3.getTime() > fecha1.getTime && fecha3.getTime() < fecha2.getTime();
}
let fecha1= new Date('1/1/2019');
let fecha2= new Date('2/1/2019');
let fecha3= new Date('1/15/2019');

console.log(comprobarFechaRango(fecha1, fecha2, fecha3));
fecha3 = new Date();
console.log(comprobarFechaRango(fecha1, fecha2, fecha3));

*/

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    return edad;
}

function edad(){
	var edad = calcularEdad();
	if(edad >= 18){
		alert("Fecha valida ");
	}else{
		alert("Debes tener mas de 18 años para el registro");
		var mytext = "Hola otra vez";
	}
}

function calcularEdad()
{
    var fecha=document.getElementById("fecha-nacimiento").value;
    var values=fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var yyyy = values[0];
 
    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth()+1;
    var ahora_dia = fecha_hoy.getDate();

    var edad = (ahora_ano + 1900) - yyyy

    document.getElementById("result").innerHTML="Tienes "+edad+" años, "+meses+" meses y "+dias+" días";

}
