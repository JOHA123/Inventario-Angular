import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PersonasService } from 'app/_Servicios/personas.service';
import { ProveedoresService } from 'app/_Servicios/proveedores.service';
import { ProductosService } from 'app/_Servicios/productos.service';
import { KardexService } from 'app/_Servicios/kardex.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit {

  listadoPersonas: any;
  listadoProveedores: any;
  listadoProductos: any;
  listadoKardex: any;
  seleccionadoEntrada = false;
  seleccionadoSalida = false;

  model: any = {};

  constructor (
    public personas: PersonasService,
    public proveedores: ProveedoresService,
    public productos: ProductosService,
    public kardex: KardexService) {
    this.listadoPersonas = this.personas.mostrar();
    this.listadoProductos = this.productos.mostrar();
    this.listadoProveedores = this.proveedores.mostrar();
    this.listadoKardex = this.kardex.mostrar();
    const today = new Date();
    this.model.fecha = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
   }

  ngOnInit() {
  }

  agregarEntrada() {
    this.model.producto = this.model.producto.payload.val();
    if (this.seleccionadoSalida) {
      this.model.persona = this.model.persona.payload.val();
    }
    if (this.seleccionadoEntrada) {
      this.model.proveedor = this.model.proveedor.payload.val();
    }
    debugger;
    this.kardex.agregar(this.model);
  }

  seleccionarEntrada() {
    this.seleccionadoEntrada = true;
    this.seleccionadoSalida = false;
    this.model.tipo = 'entrada';
  }

  seleccionarSalida() {
    this.seleccionadoEntrada = false;
    this.seleccionadoSalida = true;
    this.model.tipo = 'salida';
  }

  eliminarEntrada(id) {
    this.kardex.eliminar(id);
  }

}
