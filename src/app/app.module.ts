import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';

/* FREBASE */
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* COMPONENTES */
import { ProductosComponent } from './productos/productos/productos.component';
import { KardexComponent } from './kardex/kardex/kardex.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio/inicio.component';

/* SERVICIOS */
import { KardexService } from 'app/_Servicios/kardex.service';
import { ProductosService } from 'app/_Servicios/productos.service';
import { ProveedoresService } from 'app/_Servicios/proveedores.service';
import { PersonasComponent } from './personas/personas/personas.component';
import { PersonasService } from 'app/_Servicios/personas.service';


/* ROUTING */

const appRoutes: Routes = [
  { path: '', component: InicioComponent, data: { title: 'Iniciar Sesion'}},
  { path: 'productos', component: ProductosComponent, data: { title: 'Iniciar Sesion'}},
  { path: 'inventario', component: KardexComponent, data: { title: 'Iniciar Sesion'}},
  { path: 'proveedores', component: ProveedoresComponent, data: { title: 'Iniciar Sesion'}},
  { path: 'personas', component: PersonasComponent, data: { title: 'Iniciar Sesion'}}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    KardexComponent,
    ProveedoresComponent,
    PersonasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [KardexService, ProductosService, ProveedoresService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
