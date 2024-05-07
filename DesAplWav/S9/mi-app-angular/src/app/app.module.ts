import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaImagenesComponent } from './lista-imagenes/lista-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    ListaImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
