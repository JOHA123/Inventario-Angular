import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProveedoresService } from 'app/_Servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  listadoProveedores: Observable<any[]>;
  model: any = {};

  constructor(public proveedores: ProveedoresService) {
    this.listadoProveedores = this.proveedores.mostrar();
   }

  ngOnInit() {
  }

  agregarProveedor(){
    this.proveedores.agregar(this.model);
    this.model = {};
  }

}
