import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LibroModel } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.css']
})
export class PedirComponent implements OnInit {

  libros:LibroModel[]=[];
  // libros=new LibroModel();
  cargando=false;

  constructor(private libroService:LibroService) { }

  ngOnInit(){
    this.cargando=true;
    this.libroService.getLibros()
    .subscribe((resp:any)=>{
      this.libros=resp;
      this.cargando=false;
    });
    console.log(this.libros)
  }


  borrarLibro(libro:LibroModel, i:number){
    Swal.fire({
      title:'¿Estas Seguro?',
      text:`Esta seguro que desea borrar ${libro.nombre}`,
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(resp=>{
      if(resp.value){
        this.libros.splice(i,1);
        this.libroService.borrarLibro(libro.id).subscribe();
      }
    });
  }

}
