let total=0;
class articulo{
  constructor(nombre,costo,cantidad,subtot,total){
    this.nombre=nombre;
    this.costo=costo;
    this.cantidad=cantidad;
    this.subtot=subtot;
    this.total=total;
  }

  importe(costo){
    let iva=0.16;
    let importe=iva*costo;
    let importet=costo+importe;
    return importet;
  }

  hola(){
    console.log("hola");
  }
}