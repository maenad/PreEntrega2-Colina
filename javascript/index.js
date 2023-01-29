console.log("🔸 Pre-entrega 2 🔸")

const rollover = prompt("Por favor ingresa la cantidad con la que comenzaremos a armar tu lista de gastos. Si deseas hacerlo en otro momento, por favor escribe 'ESC'")
let rolloverTotal = Number(rollover);


function cantidadInicial() {
    if (rollover == "ESC") {
        alert("Reinicia la página para agregar el monto nuevamente.")
    }

    else {
        console.log("🔸Comenzamos con $" + rolloverTotal);

        alert("Ahora se abrirá un prompt para que ingreses los montos.")
    }
} cantidadInicial();

class nuevoIngreso {
    constructor(monto, razon, tipo) {
        this.monto = monto,
            this.razon = razon,
            this.tipo = tipo
    }
}


const listaGastos = [];

while (cantidadInicial != "ESC") { // Agrega una operación a la lista
    const monto = Number(prompt("Ingresa la cantidad"));
    const tipo = prompt("Escribe '+' si es un ingreso de dinero o '-' si es un gasto")
    const razon = prompt("Ingresa una razón");

    const ingreso = new nuevoIngreso(monto, razon, tipo);
    listaGastos.push(ingreso);
    cantidadInicial = prompt("¿Quieres ingresar otro producto? Apreta ENTER, si no, escribe 'ESC'") // Le da al usuario la opción de agregar una nueva operación o salirse y ver el total.

    if (tipo == "+") {
        rolloverTotal = rolloverTotal + monto;
        console.log("+" + monto + " ~ " + razon);
    }
    else if (tipo == "-") {
        rolloverTotal = rolloverTotal - monto;
        console.log("-" + monto + " ~ " + razon);
    }
}
console.log("TOTAL ~ " + rolloverTotal)

console.log(listaGastos);
