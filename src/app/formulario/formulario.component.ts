import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.modelo';
import { EgresoServicios } from '../egresos/egreso.servicio';
import { Ingreso } from '../ingresos/ingreso.modelo';
import { IngresoServicios } from '../ingresos/ingreso.servicio';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  tipo:string = "ingresoOperacion"
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoServ:IngresoServicios,
              private egresoServ:EgresoServicios) { }

  ngOnInit(): void {
    
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
    this.ingresoServ.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    else
    this.egresoServ.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }

}
