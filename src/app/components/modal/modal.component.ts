import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { conferencistas } from '../../models/conferencistas.interface';
import { NgForm } from '@angular/forms';
import { DataPonentesService } from '../../services/ponentes/data-ponentes.service';
import { url } from '@rxweb/reactive-form-validators';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('btnClose') btnClose : ElementRef;
  @ViewChild('inFile') inFile : ElementRef;
  @ViewChild('barra') barra : ElementRef;
  @ViewChild('enviar') enviar : ElementRef;
  uploadPercent : Observable<number>;
  urlImage: Observable<string>;
  control = false;
  datosUrl: String = "";
  subs: Subscription;
  constructor( public data: DataPonentesService, private storage: AngularFireStorage) { 
   if(data.selectConferencista.img == ""){
    this.datosUrl = data.selectConferencista.img;
   }
  }

  ngOnInit(): void {
  }

  guardarConferencista(confForm: NgForm){
    if(this.data.selectConferencista.img != "" && this.datosUrl == "") {
      this.datosUrl = this.data.selectConferencista.img;
    }
    var nuevos = confForm.value;
    nuevos.img = this.datosUrl;
    
    //Guardar
    if(confForm.value.id == null){
      this.data.saveConferencistas(confForm.value);
    }else{
       //Modificar
       this.data.editarConferencista(confForm.value);
    }
    this.datosUrl = "";
    confForm.resetForm();
    this.inFile.nativeElement.value = '';
    this.barra.nativeElement.style.width = 0;
    this.btnClose.nativeElement.click();
  }

  onUpload(e){
    this.enviar.nativeElement.disabled = true;
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'uploads/profile_' + id;
    const ref= this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=> {
      this.urlImage = ref.getDownloadURL();
      this.subs = this.urlImage.subscribe(url => {this.datosUrl =url;  this.subs.unsubscribe(); this.enviar.nativeElement.disabled = false;})
    })).subscribe();
   
    this.control =true;
    //console.log('es' + this.inputImageUser.nativeElement.value);
  }

  limpiar(confForm: NgForm){
    confForm.resetForm();
    this.inFile.nativeElement.value = '';
    this.barra.nativeElement.style.width = 0;
  }

  verificarValidez(confForm: NgForm){
    if(confForm.invalid || this.barra.nativeElement.style.width < 100) {
      return true
    }
    else {
      return false
    }
  }
  
}


