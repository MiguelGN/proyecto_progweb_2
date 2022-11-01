import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedirComponent } from './pedir/pedir.component';
import { SacarComponent } from './sacar/sacar.component';
import { DonarComponent } from './donar/donar.component';
import { VerLibroComponent } from './ver-libro/ver-libro.component';
import { verifyHostBindings } from '@angular/compiler';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PedirComponent,
    SacarComponent,
    DonarComponent,
    VerLibroComponent
  ],
  exports:[
    PedirComponent,
    SacarComponent,
    DonarComponent,
    VerLibroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
