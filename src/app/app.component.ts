import { Component } from '@angular/core';
import { DataPonentesService } from './services/ponentes/data-ponentes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'congresoResidencia';

 /* constructor( private _ponenteService: DataPonentesService,) {
    try{
      localStorage.removeItem("conferencistas");
    }
    catch(e){

    }
    this._ponenteService.getPonentes();
  }*/
}
