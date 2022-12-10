import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { SidebarComponent } from './funciones/sidebar/sidebar.component';
import { NavbarComponent } from './funciones/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './funciones/shared.module';
import { PagesModule } from './acciones/pages/pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PedirComponent } from './acciones/pages/pedir/pedir.component';
import { FormsModule } from '@angular/forms';
import { DonarComponent } from './acciones/pages/donar/donar.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
