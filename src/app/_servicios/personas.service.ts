import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonasService {

  personas: any;

  constructor(public firebase: AngularFireDatabase) {
    this.personas = this.firebase.list('personas');
   }

   agregar(producto) {
    this.personas.push(producto);
  }

  mostrar() {
    return this.personas.snapshotChanges();
  }

  eliminar(id) {
    this.personas.remove(id);
  }
}
