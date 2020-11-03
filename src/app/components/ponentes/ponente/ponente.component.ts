import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataPonentesService } from '../../../services/ponentes/data-ponentes.service';


@Component({
  selector: 'app-ponente',
  templateUrl: './ponente.component.html',
  styleUrls: ['./ponente.component.css']
})
export class PonenteComponent {
  ponente: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _dbPonentes : DataPonentesService
  ) { 
    
    this.activatedRoute.params.subscribe(params =>{
      this.ponente = this._dbPonentes.getPonente(params['id']);
    });
  }

 

}
