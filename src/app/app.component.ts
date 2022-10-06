import { Component } from '@angular/core';
import { Egreso } from './egresos/egreso.modelo';
import { EgresoServicios } from './egresos/egreso.servicio';
import { Ingreso } from './ingresos/ingreso.modelo';
import { IngresoServicios } from './ingresos/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:Ingreso[] = [];
  egresos:Egreso[] = [];

  constructor(private ingresoServ:IngresoServicios,
              private egresoServ:EgresoServicios){
                this.ingresos = ingresoServ.ingresos;
                this.egresos = egresoServ.egresos;
              }

  getIngresoTotal(){
   let ingresoTotal:number = 0;
   this.ingresos.forEach(ingreso => {
    ingresoTotal += ingreso.valor;
   });
   return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso => {
     egresoTotal += egreso.valor;
    });
    return egresoTotal;
   }

   getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
   }

   getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
   }

}
