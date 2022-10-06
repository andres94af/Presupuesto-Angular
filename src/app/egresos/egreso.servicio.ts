import { Egreso } from "./egreso.modelo";

export class EgresoServicios{
  egresos:Egreso[] = [
    new Egreso("Alquiler", 900),
    new Egreso("Super", 200)
  ];


  eliminar(egreso: Egreso) {
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}