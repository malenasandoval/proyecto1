// MODULOS IMPORTADOS DE ANGULAR 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMMPORTACION DE MODULO DE RUTEO DE INICIO
import { InicioRoutingModule } from './inicio-routing.module';

// COMPONENTES LOCALES
// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './components/card/card.component';

// COMPONENTES IMPORTADOS DE ANGULAR M
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    // DECLARACION DE COMPONENTES LOCALES
    CardComponent,
    InicioComponent
  ],
  imports: [
    // IMPORTACIÓN DE MODULOS QUE SE NECESITAN ACA EN EL MODULO
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    // EXPORTACION DE MODULOS Y COMPONENTES -> UTILIZARLOS EN OTROS MODULOS
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
