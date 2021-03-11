const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');/**Se guardan todos los */

const expresiones = {
	
	
    ingles: /^[a-zA-Z0-9_.+-]{2,3}$/, // Letras y espacios, pueden llevar acentos.
    empresa: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	pais: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	departamento:/^[a-zA-ZÀ-ÿ\s]{5,40}$/,// Letras y espacios, pueden llevar acentos.
    cargo: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    nombreEmpresa: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	cargoEmpresa:/^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	telefonoR: /^\d{7,14}$/, // 7 a 14 numeros.
	numeroIdentificacion: /^\d{8,11}$/ // 7 a 14 numeros.
}

const campos = {
ingles: false,
empresa: false,
departamento: false,
pais:false,
cargo:false,
correo:false,
telefono: false,
nombre: false,
apellido:false, 
nombreEmpresa:false,
cargoEmpresa:false,
telefonoR:false,
numeroIdentificacion: false


	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "ingles":
			validarCampo(expresiones.ingles, e.target, 'ingles');
		break;
        case "empresa":
			validarCampo(expresiones.empresa, e.target, 'empresa');
		break;
        case "departamento":
			validarCampo(expresiones.departamento, e.target, 'departamento');
		break;
        case "pais":
			validarCampo(expresiones.pais, e.target, 'pais');
		break;
        case "cargo":
			validarCampo(expresiones.cargo, e.target, 'cargo');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombreEmpresa":
			validarCampo(expresiones.nombreEmpresa, e.target, 'nombreEmpresa');
		break;
		case "cargoEmpresa":
			validarCampo(expresiones.cargoEmpresa, e.target, 'cargoEmpresa');
		break;
		case "telefonoR":
			validarCampo(expresiones.telefonoR, e.target, 'telefonoR');
		break;
		case "numeroIdentificacion":
			validarCampo(expresiones.numeroIdentificacion, e.target, 'numeroIdentificacion');
		break;
		
		
		
	}
}

//**nos va a comprobar que todo este correcto bien digitado */
const validarCampo = (expresion, input, campo) => {
	if (input.value== null){	
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;

	} else if(expresion.test(input.value)){
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
	console.log("validarCampoCondicion");
	console.log("campo:"+ campo);
	 if(cumpleCondicion){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		// cuando esta vacio el campo

		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		//document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	//nivel esudio alcanzado
	const prescolar = document.getElementById('estudio_1');
	const educacionb = document.getElementById('estudio_2');
	const educacionm = document.getElementById('estudio_3');
    const estudioChecked =  prescolar.checked || educacionm.checked ||educacionb.checked;
	//nivel de estudio alcanzado superior 
	const tecnica = document.getElementById('estudioU_1');
	const tecnologica = document.getElementById('estudioU_2');
	const especializada = document.getElementById('estudioU_3');
	const universitaria = document.getElementById('estudioU_4');
	const especializacion = document.getElementById('estudioU_5');
	const maestria = document.getElementById('estudioU_6');
	const doctorado = document.getElementById('estudioU_7');

	const estudioSuperiorChecked =tecnica.checked ||tecnologica.checked || especializada.checked || universitaria.checked ||
	especializacion.checked || maestria.checked || doctorado.checked;

//tipo empresa
const publica = document.getElementById('empresaPublica');
const privada = document.getElementById('empresaPrivada');
const empresaTChecked = publica.checked || privada.checked;
//tipo identificacion 
const cedula = document.getElementById('cedula');
const pasaporte = document.getElementById('pasaporte');
const idChecked = cedula.checked || pasaporte.checked;
//	const identificacion = document.getElementById('identificacion');

	//**se validan los compos digitados  */ && idChecked
	if(campos.ingles && estudioChecked && estudioSuperiorChecked && empresaTChecked && campos.empresa && idChecked   && campos.pais && campos.departamento
		 && campos.cargo  && campos.correo && campos.telefono && campos.nombre && campos.apellido   && campos.nombreEmpresa 
		 && campos.cargoEmpresa && campos.telefonoR && campos.numeroIdentificacion ){
		formulario.reset();
	//* direccion corespondencia  */
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 12000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		validarCampoCondicion(empresaTChecked,"empresa1" );
		validarCampoCondicion(estudioChecked,"estudio" );
		//validarCampoCondicion(nacionalidadChecked,"nacionalidad" );
		//
		validarCampoCondicion(campos.ingles,"ingles" );
	
		validarCampoCondicion(estudioSuperiorChecked,"estudioU" );
		validarCampoCondicion(campos.empresa,"empresa" );

		//validarCampoCondicion(tipoEmpresa.checked,"tipoEmpresa");
		validarCampoCondicion(campos.pais,"pais" );
		validarCampoCondicion(campos.departamento,"departamento" );
		validarCampoCondicion(campos.correo,"correo" );
		validarCampoCondicion(campos.telefono,"telefono" );
		validarCampoCondicion(campos.cargo,"cargo" );
		///
        validarCampoCondicion(campos.nombre,"nombre" );
		validarCampoCondicion(campos.apellido,"apellido" );
		validarCampoCondicion(idChecked,"identificacion" );
		validarCampoCondicion(campos.numeroIdentificacion,"numeroIdentificacion" );
		validarCampoCondicion(campos.telefonoR,"telefonoR" );
		validarCampoCondicion(campos.nombreEmpresa,"nombreEmpresa" );
		validarCampoCondicion(campos.cargoEmpresa,"cargoEmpresa" );
		validarCampoCondicion(terminos.checked,"terminos" );
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

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