import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KardexService {

  kardex: any;

  constructor(public firebase: AngularFireDatabase) {
    this.kardex = this.firebase.list('kardex');
   }

   agregar(kardex){
    this.kardex.push(kardex);
   }

   mostrar(){
    return this.kardex.valueChanges();
   }

}
