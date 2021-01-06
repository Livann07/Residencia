import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataPonentesService} from '../../services/ponentes/data-ponentes.service';
import { Router} from '@angular/router';
import { conferencistas } from '../../models/conferencistas.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ponentes: conferencistas[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _ponenteService: DataPonentesService,
              private router: Router
              ){
                this._ponenteService.getPonentes();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
        this.termino = params['busqueda'];
        this.ponentes = this._ponenteService.buscarPonente(params['busqueda']);
    });
  }

  verPonente(idx: number){
      this.router.navigate(['/ponente', idx]);
  }

}
