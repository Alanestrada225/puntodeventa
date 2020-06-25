const abarrotes = new venta();
const operaciones = new articulo();

let x=0;

const btnImporte = document.getElementById("btnImporte");
btnImporte.addEventListener("click", e => {
  let costo = parseInt(document.getElementById("costo").value);
  let resultado=operaciones.importe(costo);
  let importe = document.getElementById("importe");

  importe.value=resultado;
});

const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", e => {
  let nombre = document.getElementById("nombre").value;
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let costo = parseInt(document.getElementById("costo").value);
  let importe = parseInt(document.getElementById("importe").value);
  x+=importe;
  let cosa = new articulo(nombre, cantidad, costo,importe,x);

  let details = document.getElementById("carrito");
  details.innerHTML += `
    <div class="p-3 mb-2 bg-secondary text-white">
      <p class="card-title">Nombre: ${cosa.nombre}</p>
      <p class="card-text">Cantidad: ${cosa.cantidad}</p>
      <p class="card-text">Costo:${cosa.costo}</p>
    </div>
  `;

  let total = document.getElementById("total");
  total.innerHTML = `
    <p>Total a pagar: ${x}</p>
  `;
  abarrotes.agregar(cosa);
});