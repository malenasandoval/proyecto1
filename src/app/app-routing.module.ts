import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  // ruta común -> componente
  {
    path:"",component:InicioComponent
  },
  // carga perezosa -> ruta que te lleva a un modulo especifico
  // loadChildren: indica que habra una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta
  // .then: funcion asincronica del tipo promesa
  {
    path: "",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path: "",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path: "",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
