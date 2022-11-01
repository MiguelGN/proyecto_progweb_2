import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { SidebarComponent } from './funciones/sidebar/sidebar.component';
import { NavbarComponent } from './funciones/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './funciones/shared.module';
import { PagesModule } from './acciones/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
