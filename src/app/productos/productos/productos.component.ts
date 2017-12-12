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
    this.listadoProductos.subscribe(resultado => console.log(resultado));
  }

  ngOnInit() {
  }

  agregarProducto(){
    this.productos.agregar(this.model);
    this.model = {};
  }
}
