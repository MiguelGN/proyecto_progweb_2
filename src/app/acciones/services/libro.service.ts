import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LibroModel } from '../models/libro.model';
import { map,delay } from 'rxjs/operators';  

// interface libro{
//   id:string;
//   nombre:string;
//   tema:string;
//   autor:string;
//   donador:string;
//   estado:boolean;
// }

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url = 'https://proyecto-progweb-2-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) { }
    
    crearLibro(libro:LibroModel){
      return this.http.post(`${this.url}/donar.json`,libro)
      .pipe(
        map((resp:any)=>{
          libro.id=resp.name
          return libro;
        })
      )
    }

    borrarLibro(id:string){
      return this.http.delete(`${this.url }/donar/${ id }.json`);
    }

    getLibro(id:String){
      return this.http.get(`${this.url}/donar/${ id }.json`);
    }

    getLibros(){
      return this.http.get(`${this.url }/donar.json`)
      .pipe(
        map(this.crearArreglo),
        delay(0)
      );
    }

    private crearArreglo(libroObj:any){
      const libros:LibroModel[]=[];

      Object.keys(libroObj).forEach(key=>{
        const libro:LibroModel=libroObj[key];
        libro.id=key;

        libros.push(libro);
      });
      return libros;
    }
}
