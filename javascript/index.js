console.log("🔸 Pre-entrega 2 🔸");

const rollover = prompt(
  "Por favor ingresa la cantidad con la que comenzaremos a armar tu lista de gastos. Si deseas hacerlo en otro momento, por favor escribe 'ESC'"
);
let rolloverTotal = Number(rollover);

// Elementos del DOM a modificar
let rolloverTotalPantalla = document.getElementById("rollover");
let elementoRazon = document.getElementById("razon");
let elementoMonto = document.getElementById("monto");
let elementoTipo = document.getElementById("tipo");
let boton = document.getElementById("cta")

function cantidadInicial() {
  if (rollover == "ESC") {
    alert("Reinicia la página para agregar el monto nuevamente.");
  } else {
    console.log("🔸Comenzamos con $" + rolloverTotal);
    rolloverTotalPantalla.innerText = rolloverTotal;
    alert("Ahora se abrirá un prompt para que ingreses los montos.");
  }
}
cantidadInicial();

class nuevoIngreso {
  constructor(monto, razon, tipo) {
    (this.monto = monto), (this.razon = razon), (this.tipo = tipo);
  }
}

const listaGastos = []; //Lista completa de gastos que se crea utilizando el constructor.

const ingreso = new nuevoIngreso(monto, razon, tipo);

function agregarElemento() {
  while (cantidadInicial != "ESC") {
    // Agrega una operación a la lista
    const monto = Number(prompt("Ingresa la cantidad"));
    const tipo = prompt(
      "Escribe '+' si es un ingreso de dinero o '-' si es un gasto"
    );
    const razon = prompt("Ingresa una razón");

    listaGastos.push(ingreso);

    cantidadInicial = prompt(
      "Apreta ENTER si deseas agregar otro producto, de lo contrario, escribe 'ESC'"
    ); // Le da al usuario la opción de agregar una nueva operación o salirse y ver el total.
    function entradaNueva() {
      console.log("+" + monto + " ~ " + razon);
      rolloverTotalPantalla.innerText = rolloverTotal;
      elementoRazon.innerText = razon;
      elementoMonto.innerText = monto;
      elementoTipo.innerText = tipo;

      let nuevaRazon = document.createElement("div");
      nuevaRazon.innerHTML = elementoRazon.innerText;
      document.body.appendChild(nuevaRazon);

      let nuevoMonto = document.createElement("div");
      nuevoMonto.innerHTML = elementoMonto.innerText;
      document.body.appendChild(nuevoMonto);

      let nuevoTipo = document.createElement("div");
      nuevoTipo.innerHTML = elementoTipo.innerText;
      document.body.appendChild(nuevoTipo);
    }

    if (tipo == "+") {
      rolloverTotal = rolloverTotal + monto;
      entradaNueva();
    } else if (tipo == "-") {
      rolloverTotal = rolloverTotal - monto;
      entradaNueva();
    } else {
      alert("Escribe una operación correcta");
    }
  }
}

boton.onclick = () => {
    agregarElemento();
}

console.log("TOTAL ~ " + rolloverTotal);
console.log(listaGastos);
