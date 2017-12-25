import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PersonasService } from 'app/_Servicios/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  model: any = {};
  listadoPersonas: Observable<any[]>;

  constructor(public personas: PersonasService) {
    this.listadoPersonas = this.personas.mostrar();
    this.pruebaInformacion();
   }

  ngOnInit() {
  }

  agregarPersona() {
    this.personas.agregar(this.model);
    this.model = {};
  }

  pruebaInformacion() {
    this.listadoPersonas.subscribe(resultado => console.log(resultado));
  }

  eliminarPersona(id) {
    this.personas.eliminar(id);
  }

}
