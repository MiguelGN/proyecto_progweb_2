import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { SidebarComponent } from './funciones/sidebar/sidebar.component';
import { NavbarComponent } from './funciones/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionesComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
