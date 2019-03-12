import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Material} from './material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { RendimientoComponent } from './rendimiento/rendimiento.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { RendimientoSelectComponent } from './rendimiento-select/rendimiento-select.component';
import { RendimientoListComponent } from './rendimiento-list/rendimiento-list.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    RendimientoComponent,
    EncuestasComponent,
    RendimientoSelectComponent,
    RendimientoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
