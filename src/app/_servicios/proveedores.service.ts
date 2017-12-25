import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProveedoresService {

  proveedores: any;

  constructor(public firebase: AngularFireDatabase) {
    this.proveedores = this.firebase.list('proveedores');
   }

   agregar(proveedor) {
    this.proveedores.push(proveedor);
   }

   mostrar() {
    return this.proveedores.snapshotChanges();
   }

   eliminar(id) {
     this.proveedores.remove(id);
   }

}
