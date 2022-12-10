import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedirComponent } from './pedir/pedir.component';
import { SacarComponent } from './sacar/sacar.component';
import { DonarComponent } from './donar/donar.component';
import { VerLibroComponent } from './ver-libro/ver-libro.component';
import { verifyHostBindings } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PedirComponent,
    SacarComponent,
    DonarComponent,
    VerLibroComponent,
    InicioComponent
  ],
  exports:[
    PedirComponent,
    SacarComponent,
    DonarComponent,
    VerLibroComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
