import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.modelo';
import { IngresoServicios } from './ingreso.servicio';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  
  ingresos:Ingreso[] = [];

  constructor(private ingresoServ:IngresoServicios) {
  }
  
  ngOnInit(): void {
    this.ingresos = this.ingresoServ.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServ.eliminar(ingreso);
  }
}
