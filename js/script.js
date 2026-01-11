




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
            title: "Cálculo del voltaje \n en un circuito eléctrico",
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


//##################################### metodo capturando el evento click ##################################

async function presupuestoHospital() {

  const { value: presupuestoNeto }  =  await Swal.fire({
        title: "Ingrese el presupuesto neto del hospital",
        input: "number",
        inputLabel: "Presupuesto",        
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Debe ingresar el monto del presupuesto!";
          }
          if (value <= 0) {
            return "El presupuesto debe ser mayor a cero!";
          }
        }
  });

  const { value: porcentajeGinecologia }  =  await Swal.fire({
        title: "Ingrese el porcentaje de presupuesto para ginecología",
        input: "number",
        inputLabel: "Porcentaje",        
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Debe ingresar el porcentaje!";
          }
          if (value < 0 || value > 100) {
            return "El porcentaje debe estar entre 0 y 100!";
          }
        }
  });

  const { value: porcentajeTraumatlogia }  =  await Swal.fire({
        title: "Ingrese el porcentaje de presupuesto para traumatología",
        input: "number",
        inputLabel: "Porcentaje",        
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Debe ingresar el porcentaje!";
          }
          if (value < 0 || value > 100) {
            return "El porcentaje debe estar entre 0 y 100!";
          }
          if (parseFloat(porcentajeGinecologia) + parseFloat(value) > 100) {
            return "La suma de los porcentajes de ginecología y traumatología no puede exceder 100%! \n Disponible: " + (100 - parseFloat(porcentajeGinecologia)) + "%";
          }
        }
  });

  const { value: porcentajePediatria }  =  await Swal.fire({
        title: "Ingrese el porcentaje de presupuesto para pediatría",
        input: "number",
        inputLabel: "Porcentaje",        
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Debe ingresar el porcentaje!";
          }
          if (value < 0 || value > 100) {
            return "El porcentaje debe estar entre 0 y 100!";
          }
          if (parseFloat(porcentajeGinecologia) + parseFloat(porcentajeTraumatlogia) + parseFloat(value) !== 100) {
            return "La suma de los porcentajes debe ser igual a 100%! \n Disponible para pediatría: " + (100 - parseFloat(porcentajeGinecologia) - parseFloat(porcentajeTraumatlogia)) + "%";
          }
        }
  });

  let montoGinecologia = (presupuestoNeto * porcentajeGinecologia) / 100;
  let montoTraumatlogia = (presupuestoNeto * porcentajeTraumatlogia) / 100;
  let montoPediatria = (presupuestoNeto * porcentajePediatria) / 100;
  Swal.fire("Distribución del presupuesto: \n Ginecología: " + montoGinecologia + "\n Traumatología: " + montoTraumatlogia + "\n Pediatría: " + montoPediatria + ".","","success");
}

async function frecuencuaDeOnda() {
  const { value: tiempo } =  await Swal.fire({
        title: "Cálculo de la frecuencia de una onda",
        input: "number",
        inputLabel: "Ingrese el tiempo en segundos",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value <= 0) {
              return "El tiempo debe ser mayor a cero!";
            }
        }
  });

  let frecuencia = 1 / parseFloat(tiempo);
  Swal.fire("La frecuencia de la onda es: " + frecuencia + " Hz.","","success");
  
}

async function potenciaDeCircuito() {
  const { value: voltaje } = await Swal.fire({
        title: "Cálculo de la potencia de un circuito",
        input: "number",
        inputLabel: "Ingrese el voltaje en volts",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value <= 0) {
              return "El voltaje debe ser mayor a cero!";
            }
        }
  });

  const { value: corriente } = await Swal.fire({
        title: "Cálculo de la potencia de un circuito",
        input: "number",
        inputLabel: "Ingrese la intensidad de la corriente en amperes",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value <= 0) {
              return "La corriente debe ser mayor a cero!";
            }
        }
  });

  let potencia = parseFloat(voltaje) * parseFloat(corriente);
  Swal.fire("La potencia del circuito es: " + potencia + " watts.","","success");
}

async function gastoCine() {
  const { value: precioEntrada } = await Swal.fire({
        title: "Cálculo del gasto total en un cine",
        input: "number",
        inputLabel: "Ingrese el precio de la entrada en pesos",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el valor!";
            }
            if (value <= 0) {
                return "El precio debe ser mayor a cero!";
            }
        }
  });

  const { value: numeroPersonas } = await Swal.fire({
        title: "Cálculo del gasto total en un cine",
        input: "number",
        inputLabel: "Ingrese el número de personas",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el valor!";
            }
            if (value <= 0) {
                return "El número de personas debe ser mayor a cero!";
            }
        }
  });

  let gastoTotal = parseInt(numeroPersonas) * parseFloat(precioEntrada);
  Swal.fire("El gasto total en el cine es: " + gastoTotal + " Bs.","","success");
}

async function cantoDelGrillo() {
  const { value: cantos } = await Swal.fire({
        title: "Cálculo del canto de un grillo",
        input: "number",
        inputLabel: "Ingrese la temperatura en grados Celsius",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el valor!";
            }
            if (value < 0) {
                return "La temperatura debe ser mayor o igual a cero!";
            }
        }
  });

  let temperaturaenFahrenheit =  (parseInt(cantos)/4) + 40;
  let temperaturaenCelsius = (temperaturaenFahrenheit - 32) / 1.8;
  let temperatura = temperaturaenCelsius.toFixed(2);
  Swal.fire("La temperatura es: " + temperatura + "°C.","","success");
}
async function gasolinera() {
  const { value: estacionSurtidora } = await Swal.fire({
        title: "Cálculo del gasto total en una gasolinera",
        input: "number",
        inputLabel: "Ingrese el numero de la estación surtidora",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el numero de la estación!";
            }
            if (value <= 0) {
                return "El numero de la estación debe ser mayor a cero!";
            }
        }
  });

  const { value: precio } = await Swal.fire({
        title: "Cálculo del gasto total en una gasolinera",
        input: "number",
        inputLabel: "Ingrese el precio de la gasolina en bs/litro",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el valor!";
            }
            if (value <= 0) {
                return "El precio debe ser mayor a cero!";
            }
        }
  });

  const { value: galonesSurtidos } = await Swal.fire({
        title: "Cálculo del gasto total en una gasolinera",
        input: "number",
        inputLabel: "Ingrese la cantidad de galones surtidos",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el valor!";
            }
            if (value <= 0) {
                return "La cantidad de litros debe ser mayor a cero!";
            }
        }
  });
let litros = parseFloat(galonesSurtidos) * 3.78541; // Convertir galones a litros
  let gastoTotal = parseFloat(precio) * parseFloat(litros);
  Swal.fire("El monto a cobrar es: " + gastoTotal.toFixed(2) + " Bs. \n Por la cantidad de "+ litros.toFixed(2) +" Litros. \n En la estación surtidora " + estacionSurtidora,"","success");
}

async function elefante() {
 const { value: nombreElefante } = await Swal.fire({
      title: "Cálculo del peso de un elefante",
      input: "text",
      inputLabel: "Ingrese el nombre del elefante",
      showCancelButton: false,
      inputValidator: (value) => {
          if (!value) {
              return "Debe ingresar el nombre!";
          }
      } 
  });
  const { value: alturaElefante } = await Swal.fire({
        title: "Cálculo del peso de un elefante",
        input: "number",
        inputLabel: "Ingrese la altura del elefante en pies",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar la altura!";
            }
            if (value <= 0) {
                return "La altura debe ser mayor a cero!";
            }
        }
  });

  const { value: pesoElefante } = await Swal.fire({
        title: "Cálculo del peso de un elefante",
        input: "number",
        inputLabel: "Ingrese el peso del elefante en toneladas",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
                return "Debe ingresar el peso!";
            }
            if (value <= 0) {
                return "El peso debe ser mayor a cero!";
            }
        }
  });

  let alturaEnMetros = parseFloat(alturaElefante) * 0.30472;
  let pesoEnKilogramos = parseFloat(pesoElefante) * 1000;

  Swal.fire("El elefante llamado " + nombreElefante.toUpperCase() + " \n tiene un peso de " + pesoEnKilogramos.toFixed(2) + " kg. \ny una altura de " + alturaEnMetros.toFixed(2) + " metros.","","success");
}

// Calcula la velocidad en km/h dada la duración en minutos, segundos y centésimas y la distancia en metros
  function olimpiada() {
    let distanciaMetros = 10000; // Distancia fija de 10000 metros
Swal.fire({
    title: 'Ingresa el tiempo del patinador',
    html: `
    <label for="minutos">Minutos:</label>
    <input type="number" id="minutos" class="swal2-input" required>
    <label for="segundos">Segundos:</label>
    <input type="number" id="segundos" class="swal2-input" required>
    <label for="centesimas">Centésimas:</label>
    <input type="number" id="centesimas" class="swal2-input" required>
  `,
    focusConfirm: false, // Para enfocar el primer input
    preConfirm: () => {
    
      const tiempo = {};
     
        if (document.getElementById(`minutos`).value === '' || document.getElementById(`minutos`).value === null || document.getElementById(`minutos`).value < 0) {
          tiempo[`minutos`] = 0;
          
        } else {
          tiempo[`minutos`] = document.getElementById(`minutos`).value;
          
        }
        if (document.getElementById(`segundos`).value === '' || document.getElementById(`segundos`).value === null || document.getElementById(`segundos`).value < 0) {
          tiempo[`segundos`] = 0;
          
        } else {
          tiempo[`segundos`] = document.getElementById(`segundos`).value;
          
        }
        if (document.getElementById(`centesimas`).value === '' || document.getElementById(`centesimas`).value === null || document.getElementById(`centesimas`).value < 0) {
          tiempo[`centesimas`] = 0;
          
        } else {
          tiempo[`centesimas`] = document.getElementById(`centesimas`).value;
          
        }
       
      
       return tiempo;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      
      const { minutos, segundos, centesimas } = result.value; // Desestructura los valores

     // let totalSegundos = (parseInt(minutos) * 60) + parseInt(segundos) + (parseInt(centesimas) / 100);
      // console.log(minutos);
      // console.log(segundos);
      // console.log(centesimas);
      const totalSegundos = (parseInt(minutos) * 60) + parseInt(segundos) + (parseInt(centesimas) / 100);
    const kilometros = distanciaMetros / 1000;
    //console.log(totalSegundos);
    const horas = totalSegundos / 3600;
    //console.log(horas);
    const velocidad = kilometros / horas;
      Swal.fire('¡Carrera de 10000 metros!', `La velocidad del patinador ganador es ${velocidad.toFixed(2)} km/h.`, 'success');
    }
  });


    
  }

 async function contadoraDeBilletes() {
  const N = 81000;
  const { value: T } =  await Swal.fire({
        title: "Cálculo de billetes contados por una máquina",
        input: "number",
        inputLabel: "Ingrese el tiempo en minutos",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value <= 0) {
              return "El tiempo debe ser mayor a cero!";
            }
        }
  });


  const billetesPorMinuto = parseInt(N) / 90; // 1.5 horas = 90 minutos
  const billetesContados = billetesPorMinuto * parseFloat(T);

  Swal.fire("La máquina cuenta " + billetesContados + " billetes en " + T + " minuto(s).", "", "success");
}

async function chute() {
  const A = 2.44; // altura del arco (m)
  const V = 31.11; // velocidad (m/s)
  const T_min = 0.02; // tiempo (min)

  const T_seg = T_min * 60;
  const distanciaPerpendicular = V * T_seg;
  const distanciaAlPoste = Math.sqrt(distanciaPerpendicular * distanciaPerpendicular + A * A); // se calcula la hipotenusa y obtiene la distancia al poste

  Swal.fire(
    'Cálculo del chute',
    `a) Distancia perpendicular al arco: ${distanciaPerpendicular.toFixed(3)} m\nb) Distancia hasta el poste horizontal: ${distanciaAlPoste.toFixed(3)} m`,
    'success'
  );
  
}

async function impresora() {

let hojasporMinutos=38;
  const { value: horas } =  await Swal.fire({
        title: "Cálculo de hojas impresas por una impresora",
        input: "number",
        inputLabel: "Ingrese el tiempo en horas",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value <= 0) {
              return "El tiempo debe ser mayor a cero!";
            } 
        }
  });  
  

  const { value: porcentaje } =  await Swal.fire({
        title: "Cálculo de letras imprimibles por una impresora",
        input: "number",
        inputLabel: "Ingrese el porcentaje de tinta restante en el cartucho",
        showCancelButton: false,
        inputValidator: (value) => {
            if (!value) {
            return "Debe ingresar el valor!";
            }
            if (value < 0 || value > 100) {
              return "El porcentaje debe estar entre 0 y 100!";
            }
        }
  });
  let hojasImpresas= Math.floor(hojasporMinutos * horas * 60);
  let capacidadCartucho=5; //ml
  let tintaRestante=(capacidadCartucho * porcentaje)/100;
  let letrasImprimibles= tintaRestante / 0.00001;
  Swal.fire("La impresora imprimirá " + hojasImpresas + " hojas en " + horas + " hora(s). \n Y podrá imprimir " + Math.floor(letrasImprimibles) + " letras más con el cartucho restante.","","success");
}

async function libro() {

  const largo = 228.6; // mm
  const ancho = 152.4; // mm
  const espesor = 50; // mm
  const E = 0.52; // mm 
  let area = largo * (ancho * 2)+50; // área cuando el libro está abierto
  let numeroHojas = (espesor - 20) / E; // espesor de las cubiertas es 0.2 dm = 20 mm
  Swal.fire("El área que ocupa el libro cuando está abierto es: " + area + " mm². \n El número de hojas contenidas en el libro es: " + Math.floor(numeroHojas) + " hojas.","","success");

}


// 1. Seleccionamos un elemento contenedor (o el documento entero)
const contenedor = document.getElementById('segundaGuia'); 

// 2. Añadimos UN solo addEventListener a ese contenedor
contenedor.addEventListener('click', function(evento) {
  // 3. Dentro de la función, verificamos el objetivo del clic
  console.log(evento.target.parentElement.id); // Muestra el elemento que fue clickeado
  let elementoClickeado = evento.target.parentElement.id;
   
   switch (elementoClickeado) {
    case "presupuestoHospital":
     presupuestoHospital();

    break;
    case "voltajeDeCircuito":
      voltaje();

    break;
    case "frecuenciaDeOnda":
      frecuencuaDeOnda();

    break;
    case "potenciaDeCircuito":
      potenciaDeCircuito();

    break;
    case "gastoCine":
      gastoCine();

    break;
    case "temperatura":
      cantoDelGrillo();
    break;
    case "gasolinera":
      gasolinera();

    break;
    case "elefante":
      elefante();

    break;
    case "competenciaDePatinaje":
      olimpiada();
    break;
    case "contadoraDeBilletes":
      contadoraDeBilletes();

    break;
    case "chute":
      chute();

    break;
    case "impresora":
      impresora();

    break;
    case "libro":
      alert("Has hecho clic en el elemento con ID: " + elementoClickeado + ".");

    break;
  
    default:
      break;
   }

});
