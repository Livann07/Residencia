import { Component, OnInit } from '@angular/core';
import { DataPonentesService } from '../../services/ponentes/data-ponentes.service';
import { conferencistas } from '../../models/conferencistas.interface';

@Component({
  selector: 'app-agregar-conferencistas',
  templateUrl: './agregar-conferencistas.component.html',
  styleUrls: ['./agregar-conferencistas.component.css']
})
export class AgregarConferencistasComponent implements OnInit {

   conferencistasData: conferencistas[];
  //public conferencistaData = [];
  constructor(private data: DataPonentesService) { }

  ngOnInit(): void {
    this.obtenerTodosConferencistas();
  }


  obtenerTodosConferencistas(){
    this.data.getConferencistasEdicion().subscribe(conf =>{
      this.conferencistasData = conf;
    });
  }

  eliminarConferencista(idConf: String){
    const confirmar = confirm('¿Estás seguro de eliminar');
    if(confirmar)  this.data.eliminarConferencistas(idConf);
  }

  preActualizar(conf: conferencistas){
    this.data.selectConferencista = Object.assign({},conf);
  }
}
