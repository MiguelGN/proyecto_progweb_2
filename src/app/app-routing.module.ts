import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedirComponent } from "./acciones/pages/pedir/pedir.component";
import { SacarComponent } from "./acciones/pages/sacar/sacar.component";
import { DonarComponent } from "./acciones/pages/donar/donar.component";
import { VerLibroComponent } from "./acciones/pages/ver-libro/ver-libro.component";
import { InicioComponent } from "./acciones/pages/inicio/inicio.component";


const routes: Routes=[
    {
        path:'pedir',
        component:PedirComponent,
        pathMatch:'full'
    },
    {
        path:'inicio',
        component:InicioComponent,
        pathMatch:'full'
    },
    {
        path:'sacar',
        component:SacarComponent,
        pathMatch:'full'
    },
    {
        path:'donar/:id',
        component:DonarComponent, 
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo :'' 
    }


]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}