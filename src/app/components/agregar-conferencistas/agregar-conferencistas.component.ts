import { Component, OnInit } from '@angular/core';
import { DataPonentesService } from '../../services/ponentes/data-ponentes.service';
import { conferencistas } from '../../models/conferencistas.interface';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-agregar-conferencistas',
  templateUrl: './agregar-conferencistas.component.html',
  styleUrls: ['./agregar-conferencistas.component.css']
})
export class AgregarConferencistasComponent implements OnInit {

   conferencistasData: conferencistas[];
  //public conferencistaData = [];
  constructor(private data: DataPonentesService, private store: AngularFireStorage) { }

  ngOnInit(): void {
    this.obtenerTodosConferencistas();
  }


  obtenerTodosConferencistas(){
    this.data.getConferencistasEdicion().subscribe(conf =>{
      this.conferencistasData = conf;
    });
  }

  eliminarConferencista(idConf: String, url: string){
    const confirmar = confirm('¿Estás seguro de eliminarlo?');
    if(confirmar){
      if(!(url == "") && !(url == null)){
        try {
          var desertRef = this.store.storage.refFromURL(url);
          desertRef.delete();
        } catch (error) { }
      }
      this.data.eliminarConferencistas(idConf);
    }  
  }

  preActualizar(conf: conferencistas){
    this.data.selectConferencista = Object.assign({},conf);
  }
}
