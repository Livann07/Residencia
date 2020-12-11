import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.component.html',
  styleUrls: ['./asistentes.component.css']
})
export class AsistentesComponent implements OnInit {
  
  datos: any;
  suscripcionD : Subscription;

  constructor(private dbData: DataDbService) { }

  ngOnInit(): void {
  }

  // * Se puede mejorar esto
  obtenerAsistentes(){
    var ls = JSON.parse(localStorage.getItem('datos'));

    if (ls == null){
      this.suscripcionD = this.dbData.getUser().subscribe(respuesta =>{
        // ! este sirve
        /* this.datos = respuesta.map(e => e.payload.doc.data());*/
        this.datos = respuesta.map((e: any) => {
          return{
            nombre: e.payload.doc.data()['nombre'],
            apellidos: e.payload.doc.data()['apellidos'],
            correo: e.payload.doc.data()['correo'],
          };
        });
        localStorage.setItem('datos', JSON.stringify(this.datos));
        this.suscripcionD.unsubscribe();
      });
      console.log('primera vez');
    }else{
      this.datos = ls;
      console.log('ya lo tienes');
    }
  }


}

