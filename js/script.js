




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
//alturaFachada3.parseFloat;
   console.log(typeof alturaFachada3.parseFloat);
    console.log(alturaFachada3);

}
//#################### metodo con formulario ########################
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

//#################### fin metodo con formulario ########################


// #################### metodo con funcion en el evento onclick ########################
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

 async function voltaje() {

      const { value: resistencia } =  await Swal.fire({
            title: "Cálculo del voltaje en un circuito eléctrico",
            input: "number",
            inputLabel: "Ingrese el valor de la resistencia en ohmios",        
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                return "Debe ingresar el valor!";
                }
            }
      });
      const { value: intensidad } =  await Swal.fire({
            title: "Cálculo del voltaje en un circuito eléctrico",
            input: "number",
            inputLabel: "Ingrese el valor de la intensidad de lacorriente en amperios",        
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                return "Debe ingresar el valor!";
                }
            }
      });
      let voltaje= resistencia * intensidad;
      Swal.fire("El voltaje del circuito es: " + voltaje + " volts.","","success");
    }

 async function calcularIMC2() {
      const { value: peso } =  await Swal.fire({
            title: "Cálculo del Índice de Masa Corporal (IMC)",
            input: "number",
            inputLabel: "Ingrese su peso en kilogramos",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                return "Debe ingresar el valor!";
                }
            }
      });
      const { value: altura } =  await Swal.fire({
            title: "Cálculo del Índice de Masa Corporal (IMC)",
            input: "number",
            inputLabel: "Ingrese su altura en metros",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                return "Debe ingresar el valor!";
                }
            }
      });
      let imc= peso / Math.pow(altura,2);
      Swal.fire("Su IMC es: " + imc + ".","","success");
    }
 
 async function calcularFahrenheit() {
      const { value: celsius } =  await Swal.fire({
            title: "Cálculo de Celsius a Fahrenheit",
            input: "number",
            inputLabel: "Ingrese la temperatura en grados Celsius",
            showCancelButton: false,
            inputValidator: (value) => {
                if (!value) {
                return "Debe ingresar el valor!";
                }
            }
      });
      let fahrenheit= (celsius * 1.8) + 32;
      Swal.fire("La temperatura en Fahrenheit es: " + fahrenheit + "°F.","","success");
    }
 async function calculoDeInteres() {
  const { value: capital } =  await Swal.fire({
        title: "Cálculo de Interés Simple",
        input: "number",
        inputLabel: "Ingrese el capital inicial",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  const { value: tasa } =  await Swal.fire({
        title: "Cálculo de Interés Simple",
        input: "number",
        inputLabel: "Ingrese la tasa de interés anual",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  const { value: tiempo } =  await Swal.fire({
        title: "Cálculo de Interés Simple",
        input: "number",
        inputLabel: "Ingrese el tiempo en años",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  let interes= capital * tasa * tiempo;
  Swal.fire("El interés simple es: " + interes + ".","","success");
 }

 async function promedio() {
   const { value: nota1 } =  await Swal.fire({
        title: "Cálculo del promedio de notas",
        input: "number",
        inputLabel: "Ingrese la primera nota",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  const { value: nota2 } =  await Swal.fire({
        title: "Cálculo del promedio de notas",
        input: "number",
        inputLabel: "Ingrese la segunda nota",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  const { value: nota3 } =  await Swal.fire({
        title: "Cálculo del promedio de notas",
        input: "number",
        inputLabel: "Ingrese la tercera nota",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  const { value: nota4 } =  await Swal.fire({
        title: "Cálculo del promedio de notas",
        input: "number",
        inputLabel: "Ingrese la cuarta nota",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });

  const { value: nota5 } =  await Swal.fire({
        title: "Cálculo del promedio de notas",
        input: "number",
        inputLabel: "Ingrese la quinta nota",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
        }
  });
  let promedio= (nota1 + nota2 + nota3 + nota4 + nota5)/5;
  Swal.fire("El promedio es: " + promedio + ".","","success");
 }

function promedio2() {
  Swal.fire({
    title: 'Ingresa tus datos',
    html: `
    <label for="nota1">Nota1:</label>
    <input type="number" id="nota1" class="swal2-input" required>
    <label for="nota2">Nota2:</label>
    <input type="number" id="nota2" class="swal2-input" required>
    <label for="nota3">Nota3:</label>
    <input type="number" id="nota3" class="swal2-input" required>
    <label for="nota4">Nota4:</label>
    <input type="number" id="nota4" class="swal2-input" required>
    <label for="nota5">Nota5:</label>
    <input type="number" id="nota5" class="swal2-input" required>
    <label for="nota6">Nota6:</label>
    <input type="number" id="nota6" class="swal2-input" required>
    <label for="nota7">Nota7:</label>
    <input type="number" id="nota7" class="swal2-input" required>
    <label for="nota8">Nota8:</label>
    <input type="number" id="nota8" class="swal2-input" required>
    <label for="nota9">Nota9:</label>
    <input type="number" id="nota9" class="swal2-input" required>
    <label for="nota10">Nota10:</label>
    <input type="number" id="nota10" class="swal2-input" required>

  `,
    focusConfirm: false, // Para enfocar el primer input
    preConfirm: () => {
      // const nota1 = document.getElementById('nota1').value;
      // const nota2 = document.getElementById('nota2').value;
      // const nota3 = document.getElementById('nota3').value;
      // const nota4 = document.getElementById('nota4').value;
      // const nota5 = document.getElementById('nota5').value;
      // const nota6 = document.getElementById('nota6').value;
      // const nota7 = document.getElementById('nota7').value;
      // const nota8 = document.getElementById('nota8').value;
      // const nota9 = document.getElementById('nota9').value;
      // const nota10 = document.getElementById('nota10').value;
      const notas = {};
      for (let i = 1; i <= 10; i++) {
        if (document.getElementById(`nota${i}`).value === '' || document.getElementById(`nota${i}`).value === null || document.getElementById(`nota${i}`).value < 0) {
          notas[`nota${i}`] = 0;
          console.log(`nota${i}`+' vacía');
        } else {
          notas[`nota${i}`] = document.getElementById(`nota${i}`).value;
          console.log(`nota${i}`);
        }
        // Puedes hacer validaciones aquí si necesitas
        // Retorna un objeto con los valores
        //return { nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9, nota10 }; // Retorna un objeto con los valores
      }
       return notas;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(result.value);
      const { nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9, nota10 } = result.value; // Desestructura los valores

      let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10)) / 10;
      Swal.fire('¡Éxito!', `El promedio es ${promedio}.`, 'success');

    }
  });
}

async function trabajoMecanico() {
  const { value: fuerza } = await Swal.fire({
    title: "Cálculo de trabajo mecánico",
    input: "number",
    inputLabel: "Ingrese la fuerza en Newtons",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });
  const { value: distancia } = await Swal.fire({
    title: "Cálculo de trabajo mecánico",
    input: "number",
    inputLabel: "Ingrese la distancia en metros",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });

  let trabajo = parseFloat(fuerza) * parseFloat(distancia);
  Swal.fire('¡Éxito!', `El trabajo mecánico es ${trabajo} Joules.`, 'success');
}

async function distancia2() {
  const { value: velocidad } = await Swal.fire({
    title: "Cálculo de distancia recorrida",
    input: "number",
    inputLabel: "Ingrese la velocidad en km/h",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });
  const { value: tiempo } = await Swal.fire({
    title: "Cálculo de distancia recorrida",
    input: "number",
    inputLabel: "Ingrese el tiempo en horas",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });

  let distancia = parseFloat(velocidad) * parseFloat(tiempo);
  Swal.fire('¡Éxito!', `La distancia recorrida es ${distancia} km.`, 'success');
}

async function volumenCilindro() {
  const { value: radio } = await Swal.fire({
    title: "Cálculo de volumen de cilindro",
    input: "number",
    inputLabel: "Ingrese el radio en centimetros",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });
  const { value: altura } = await Swal.fire({
    title: "Cálculo de volumen de cilindro",
    input: "number",
    inputLabel: "Ingrese la altura en centimetros",
    showCancelButton: false,
    inputValidator: (value) => {
      if (!value) {
        return "Debe ingresar el valor!";
      }
    }
  });

  let volumen = Math.PI * Math.pow(parseFloat(radio), 2) * parseFloat(altura);
  Swal.fire('¡Éxito!', `El volumen del cilindro es ${volumen} cm³.`, 'success');
}

function miFuncion(elemento) {
    let id = elemento.id;
    //Swal.fire("Has hecho clic en el elemento con ID: " + id + ".","","info");

   switch (id) {
     case "area":
        calcularAreaDeTriangulo();
        break;
   case "distancia1":
    calcularDistanciaEntreDosPuntos();
      break;
      case "voltaje":
        voltaje();
      break;
      case "imc":
        calcularIMC2();
      break;
      case "celsius":
        calcularFahrenheit();
      break;
      case "interes":
        calculoDeInteres();
      break;  
      case "promedio":
        promedio2();
      break;
      case "distancia2":
        distancia2();
      break;
    case "trabajo":
      trabajoMecanico();
      break;
    case "volumen":
      volumenCilindro();
      break;

     default:
       break;
   }
}
// #################### fin metodo con funcion en el evento onclick ########################


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
