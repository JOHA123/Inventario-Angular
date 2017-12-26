import { Component, OnInit } from '@angular/core';
import { KardexService } from '../../_Servicios/kardex.service'
import { ProductosService } from '../../_Servicios/productos.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listadoKardex: Observable<any[]>;
  sumatorias: any = {};
  listadoProductos: Observable<any[]>;

  constructor(public kardex: KardexService, public productos: ProductosService) {
    this.listadoKardex = this.kardex.contar();
    this.listadoProductos = this.productos.mostrar();
    this.sumatoria();
  }

  ngOnInit() {
  }

  sumatoria() {
    this.listadoKardex.subscribe(resultado => {
      this.saberTipo(resultado);
      // if (resultado.tipo == 'salida') {
      //   // this.sumatorias[resultado.producto.codigo] += cantidad;
      //   console.log('suma');
      // } else {
      //   // this.sumatorias[resultado.producto.codigo] -= cantidad;
      //   console.log('resta');
      // }
    });
  }

  saberTipo(arreglo) {
    arreglo.forEach(producto => {
      // console.log(producto.cantidad);
      console.log(this.sumatorias);
      if (!this.sumatorias[producto.producto.codigo]) {
        this.sumatorias[producto.producto.codigo] = 0;
      }
      if (producto.tipo === 'entrada') {
        this.sumatorias[producto.producto.codigo] = this.sumatorias[producto.producto.codigo] + parseFloat(producto.cantidad);
      } else {
        this.sumatorias[producto.producto.codigo] = this.sumatorias[producto.producto.codigo] - parseFloat(producto.cantidad);
      }
    });
  }
}
