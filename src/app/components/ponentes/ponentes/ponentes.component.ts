import { Component, OnInit } from '@angular/core';
import { DataPonentesService, Ponentes } from '../../../services/ponentes/data-ponentes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.component.html',
  styleUrls: ['./ponentes.component.css']
})
export class PonentesComponent implements OnInit {

  ponentes: Ponentes[] = [];

  constructor(private _ponentesService: DataPonentesService,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    this.ponentes = this._ponentesService.getPonentes();
    //console.log(this.ponentes);
  }

  verPonente(idx: number){
    this.router.navigate(['/ponente', idx]);
  }

}
