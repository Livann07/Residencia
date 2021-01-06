import { Component, ElementRef, HostListener, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataPonentesService} from '../../../services/ponentes/data-ponentes.service';
import { Router} from '@angular/router';
import { conferencistas } from '../../../models/conferencistas.interface';
import { Subscription, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.component.html',
  styleUrls: ['./ponentes.component.css']
})
export class PonentesComponent implements OnInit {

  @ViewChild('imageUser') inputImageUser: ElementRef;
  
  ponentes: conferencistas[]=[];
  ponentesLoad: Promise<boolean>;
  oo:Boolean;
  suscripcionD : Subscription;

  uploadPercent : Observable<number>;
  urlImage: Observable<string>;

  constructor(private _ponentesService: DataPonentesService, private router: Router, private storage: AngularFireStorage) {
   this.oo = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._ponentesService.getPonentes();
    }, 1000); 
    this.ponentes= this.guardarConferencistas();
    
     //this.oo = true;
  }

  verPonente(idx: number){
    this.router.navigate(['/ponente', idx]);   
  }

  private guardarConferencistas():any{
    var ls = JSON.parse(localStorage.getItem('conferencistas'));
    
    if(ls == null){
      this.suscripcionD = this._ponentesService.getConferencistas().subscribe(respuesta =>{
        this.ponentes = respuesta.map((e: any)=> {
          return e.payload.doc.data();
        });
        localStorage.setItem('conferencistas', JSON.stringify(this.ponentes));
        this.ponentes = JSON.parse(localStorage.getItem('conferencistas'));
        this.suscripcionD.unsubscribe();
        this.oo = true;
      });
      //console.log('es' + this.ponentes);
      console.log('Hola 1');
    }else{
      this.ponentes= ls;
      this.oo = true;
    }
    return this.ponentes;
  }

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'uploads/profile_' + id;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();
    //console.log('es' + this.inputImageUser.nativeElement.value);
  }
  

}
