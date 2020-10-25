import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../../services/sesion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public ses: SesionService) { }

  ngOnInit(): void {
  }

}
