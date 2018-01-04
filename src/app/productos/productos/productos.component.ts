import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../_Servicios/productos.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  listadoProductos: Observable<any[]>;
  model: any = {};

  constructor(public productos: ProductosService) {
    this.listadoProductos = this.productos.mostrar();
  }

  ngOnInit() {
  }

  agregarProducto() {
    this.productos.agregar(this.model);
    this.model = {};
  }

  eliminarProducto(id) {
    this.productos.eliminar(id);
  }

  editarCantidadMinima(cantidad, id) {
    console.log(cantidad);
    console.log(id);
  }
}
