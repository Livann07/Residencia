import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router} from '@angular/router';
@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public ses: SesionService, private route: Router) { }

  ngOnInit(): void {
  }
  
  cerrarSesion()
  {
    this.ses.logOut();
    this.route.navigate(['home']);
  }

}
