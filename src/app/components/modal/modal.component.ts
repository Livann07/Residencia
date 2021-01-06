import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { conferencistas } from '../../models/conferencistas.interface';
import { NgForm } from '@angular/forms';
import { DataPonentesService } from '../../services/ponentes/data-ponentes.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('btnClose') btnClose : ElementRef;
  uploadPercent : Observable<number>;
  urlImage: Observable<string>;
  control = false;
  constructor( public data: DataPonentesService, private storage: AngularFireStorage) { 

  }

  ngOnInit(): void {
  }

  guardarConferencista(confForm: NgForm){
    //Guardar
    if(confForm.value.id == null){
      this.data.saveConferencistas(confForm.value);
    }else{
       //Modificar
       this.data.editarConferencista(confForm.value);
    }
    confForm.resetForm();
    this.btnClose.nativeElement.click();
   
  }

  onUpload(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'uploads/profile_' + id;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> this.urlImage = ref.getDownloadURL())).subscribe();
    this.control =true;
    //console.log('es' + this.inputImageUser.nativeElement.value);
  }

  limpiar(confForm: NgForm){
    confForm.resetForm();
  }



  
}


