import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    AlimentacionComponent,
    IndumentariaComponent,
    JugueteComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
