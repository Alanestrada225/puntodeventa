class venta{
  constructor(montodepago,cambio) {
    this.inicio = null;
    this.totalNodes = 0;
  }

  agregar(nuevo) {
    if (this.inicio === null) this.inicio = nuevo;
    else {
      let temp = this.inicio;
      while (temp.siguiente != null) {
        temp = temp.siguiente;
      }
      temp.siguiente = nuevo;
    }
    this.totalNodes++;
  }
}