




async function calcularAreaDeFachada() {
  
  const { value: medidaFachada } =  await Swal.fire({
        title: "Ingrese la medida del ancho de la fachada",
        input: "number",
        inputLabel: "Medida de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});
const { value: alturaFachada } =  await Swal.fire({
        title: "Ingrese la medida de la altura de la fachada",
        input: "number",
        inputLabel: "Altura de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});
  const { value: medidaFachada2 } =  await Swal.fire({
        title: "Ingrese la medida del ancho de la fachada",
        input: "number",
        inputLabel: "Medida de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});
const { value: alturaFachada1 } =  await Swal.fire({
        title: "Ingrese la medida de la altura de la fachada",
        input: "number",
        inputLabel: "Altura de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});
  const { value: medidaFachada4 } =  await Swal.fire({
        title: "Ingrese la medida del ancho de la fachada",
        input: "number",
        inputLabel: "Medida de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});
const { value: alturaFachada3 } =  await Swal.fire({
        title: "Ingrese la medida de la altura de la fachada",
        input: "number",
        inputLabel: "Altura de la fachada en metros",        
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar la medida!";
            }
        }
});

   

}

// Para llamarla:
//calcularAreaDeFachada();
// 1. Seleccionar el botón por su ID
const boton = document.getElementById('imc2');

// 2. Definir la función
function calcularIMC() {
  const peso= document.getElementById('peso').value;
  const altura= document.getElementById('altura').value;
  console.log(peso);
  console.log(altura);
  let resultado= document.getElementById("resultadoIMC");
  let imc=peso/(altura*altura); 
  resultado.innerHTML= "Su masa Corporal es: " +imc + " imc...";
}

// 3. Añadir el detector de eventos
boton.addEventListener('click', calcularIMC);

 async function calcularAreaDeTriangulo() {
        const { value: base } =  await Swal.fire({
              title: "Cálculo del área del triángulo",
              input: "number",
              inputLabel: "Ingrese la medida de la base del triangulo en metros",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar la medida!";
                  }
              }
      });
    
      const { value: altura } =  await Swal.fire({
              title: "Ingrese la medida de la altura del triángulo",
              input: "number",
              inputLabel: "Altura del triángulo en metros",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar la medida!";
                  }
              }
      });
      let area=(base*altura)/2; 
      Swal.fire("El área del triángulo es: " + area + " metros cuadrados.","","success");
    }

     async function calcularDistanciaEntreDosPuntos() {
        const { value: x1 } =  await Swal.fire({
              title: "Cálculo de la distancia entre dos puntos en el plano cartesiano",
              input: "number",
              inputLabel: "Ingrese el valor de x1",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar el valor!";
                  }
              }
      });
      const { value: y1 } =  await Swal.fire({
              title: "Cálculo de la distancia entre dos puntos en el plano cartesiano",
              input: "number",
              inputLabel: "Ingrese el valor de y1",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar el valor!";
                  }
              }
      });
    
      const { value: x2 } =  await Swal.fire({
              title: "Cálculo de la distancia entre dos puntos en el plano cartesiano",
              input: "number",
              inputLabel: "Ingrese el valor de x2",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar el valor!";
                  }
              }
      });
      const { value: y2 } =  await Swal.fire({
              title: "Cálculo de la distancia entre dos puntos en el plano cartesiano",
              input: "number",
              inputLabel: "Ingrese el valor de y2",        
              showCancelButton: false,
              inputValidator: (value) => {
                  if (!value) {
                  return "Debe ingresar el valor!";
                  }
              }
      });
      let distancia=Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)); 
      Swal.fire("La distancia entre los dos puntos es: " + distancia + ".","","success");
    }
function miFuncion(elemento) {
    let id = elemento.id;
    Swal.fire("Has hecho clic en el elemento con ID: " + id + ".","","info");

   switch (id) {
     case "area":
        calcularAreaDeTriangulo();
        break;
   case "distancia1":
    calcularDistanciaEntreDosPuntos();
      break;
      case "voltaje":
      break;
      case "imc":
      break;
      case "celsius":
      break;
      case "interes":
      break;  
      case "promedio":
      break;
      case "distancia2":
      break;
    case "trabajo":
      break;
    case "volumen":
      break;

     default:
       break;
   }
}

//#######################################################################
// 1. Seleccionamos un elemento contenedor (o el documento entero)
const contenedor = document.getElementById('segundaGuia'); // O document.querySelector('.mi-contenedor');

// 2. Añadimos UN solo addEventListener a ese contenedor
contenedor.addEventListener('click', function(evento) {
  // 3. Dentro de la función, verificamos el objetivo del clic
  console.log(evento.target.parentElement.id); // Muestra el elemento que fue clickeado
  let elementoClickeado = evento.target.parentElement.id;
   
   switch (elementoClickeado) {
    case "presupuestoHospital":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "voltajeDeCircuito":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "frecuenciaDeOnda":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "potenciaDeCircuito":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "gastoCine":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "temperatura":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "gasolinera":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "elefante":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "competenciaDePatinaje":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "contadoraDeBilletes":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "chute":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "impresora":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
    case "libro":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
  
    default:
      break;
   }

});
