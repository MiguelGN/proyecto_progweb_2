import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LibroService } from '../../services/libro.service';
import { LibroModel } from '../../models/libro.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {

  libro: LibroModel = new LibroModel();

  constructor(private LibroService: LibroService,
              private route:ActivatedRoute) { }

  ngOnInit(){
    const id = ''+this.route.snapshot.paramMap.get('id');

    if(id!=='nuevo'){
      this.LibroService.getLibro(id)
      .subscribe((resp:any)=>{
        this.libro=resp;
        this.libro.id=id;
      })
    }
  }

  guardar( form:NgForm ){
    if(form.invalid){
      console.log('Formulario no valido');
      return;
    }
    Swal.fire({
      title:'Espere',
      text:'Guardando Informacion del Libro',
      icon:'info',
      allowOutsideClick:false,
      showConfirmButton:false,
    });
    Swal.showLoading(Swal.getDenyButton());

    let peticion: Observable<any>;

    if(this.libro){
      peticion=this.LibroService.crearLibro(this.libro);
    }else{
      peticion=this.LibroService.crearLibro(this.libro);
    }
    peticion.subscribe(resp=>{
      Swal.fire({
        title:this.libro.id,
        text:'Se inserto el libro correctamete',
        icon:'success'
      });
      console.log(this.libro)
    })
    
  }


}
