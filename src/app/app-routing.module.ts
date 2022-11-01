import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PedirComponent } from "./acciones/pages/pedir/pedir.component";
import { SacarComponent } from "./acciones/pages/sacar/sacar.component";
import { DonarComponent } from "./acciones/pages/donar/donar.component";
import { VerLibroComponent } from "./acciones/pages/ver-libro/ver-libro.component";


const routes: Routes=[
    {
        path:'pedir',
        component:PedirComponent,
        pathMatch:'full'
    },
    {
        path:'sacar',
        component:SacarComponent,
        pathMatch:'full'
    },
    {
      path:'donar',
      component:DonarComponent,
      pathMatch:'full'
    },
    {
        path:'pais/:id',
        component:VerLibroComponent,
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