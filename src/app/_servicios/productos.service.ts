import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductosService {

  productos: any;

  constructor(public firebase: AngularFireDatabase) {
    this.productos = this.firebase.list('productos');
  }

  agregar(producto){
    this.productos.push(producto);
  }

  mostrar(){
    return this.productos.valueChanges();
  }

}
