import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.modelo';
import { EgresoServicios } from './egreso.servicio';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
})
export class EgresosComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number = 0;

  constructor(private egresosServ: EgresoServicios) {}

  ngOnInit(): void {
    this.egresos = this.egresosServ.egresos;
  }

  eliminarRegistro(egreso: Egreso) {
    this.egresosServ.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor/this.ingresoTotal;
  }
}
