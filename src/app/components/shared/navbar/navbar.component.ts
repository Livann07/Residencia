import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SesionService } from '../../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public ses: SesionService) {

  }

  ngOnInit(): void {
  }

  buscarPonente( termino: string){
    this.router.navigate(['/search', termino]);
  }


  cerrarSesion()
  {
    this.ses.logOut();
    this.router.navigate(['home']);
  }
}
