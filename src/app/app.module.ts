import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//importamos solo componentes globales para que permita exportar los componentes
import { SharedModule } from './modules/shared/shared.module';

// vinculaciones / importaciones con firebase
import { environment } from 'src/environments/environments';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // componentes globales
    SharedModule,
    // inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // autentificacion 
    AngularFireAuthModule,
    // storage --> BD de imagenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
