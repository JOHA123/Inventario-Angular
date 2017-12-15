import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PersonasService } from 'app/_Servicios/personas.service';
import { ProveedoresService } from 'app/_Servicios/proveedores.service';
import { ProductosService } from 'app/_Servicios/productos.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  listadoPersonas: any;
  listadoProveedores: any;
  listadoProductos: any;
  seleccionadoEntrada: boolean = false;
  seleccionadoSalida: boolean = false;

  model: any = {};

  constructor(public personas: PersonasService, public proveedores: ProveedoresService, public productos: ProductosService) {
    this.listadoPersonas = this.personas.mostrar();
    this.listadoProductos = this.productos.mostrar();
    this.listadoProveedores = this.proveedores.mostrar();
    let today = new Date();
    this.model.fecha = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
   }

  ngOnInit() {
  }

  agregarEntrada(){
    console.log(this.model);
  }

  seleccionarEntrada(){
    this.seleccionadoEntrada = true;
    this.seleccionadoSalida = false;
  }

  seleccionarSalida(){
    this.seleccionadoEntrada = false;
    this.seleccionadoSalida = true;
  }

}
