import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { DataDbService } from 'src/app/services/data-db.service';
@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  clienteSubscription: Subscription;
  constructor(public ses: SesionService, private route: Router, private dbData: DataDbService) { 
    if(localStorage.getItem('participa') == null || localStorage.getItem('tipo') == null) {
      this.recibirDatos();
    }
  }

  ngOnInit(): void {
  }
  
  cerrarSesion()
  {
    this.ses.logOut();
    this.route.navigate(['home']);
  }

  recibirDatos()
  {
    var datos: any;
    
    this.clienteSubscription = this.dbData.getparticipantes().subscribe(resp =>{
      
      datos = resp.map((e: any) => {
        return {
          correo: e.payload.doc.data()['correo'],
          parti: e.payload.doc.data()['participante'],
        };
      });

      /*datos = resp.map(e => e.payload.doc.data());
      console.log(datos);*/
      
      this.clienteSubscription.unsubscribe();
      this.compararDatos(datos);
    });
  }
  compararDatos(values: any){ 
    var encontro = false;
    values.forEach(element => {
      if(element.correo == this.ses.getCorreoSesion())
      {
        encontro = true;
        localStorage.setItem('participa', 'true');
        localStorage.setItem('tipo', element.parti);
      }
    });
    
  }
}
