import { Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataDbService } from '../../services/data-db.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'perfil-congreso',
  templateUrl: './perfil-congreso.component.html',
  styleUrls: ['./perfil-congreso.component.css']
})
export class PerfilCongresoComponent implements OnInit {

 
  @ViewChild(QrScannerComponent, {static : false}) qrScannerComponent: QrScannerComponent ;
  resultado: string;
  public hid: boolean;
  public load: boolean;
  private isSubScaneoLista: boolean;
  mensaje: string;

  clienteSubscription: Subscription;
  constructor(private db: DataDbService) { 
    this.resultado = "";
    this.hid = true;
    this.load = true;
    this.isSubScaneoLista = false;
    this.mensaje = "";
  }

  ngOnInit(): void {
  }
  ngOnDestrpy(): void {
    this.clienteSubscription.unsubscribe();
 } 
 async iniciar(){
    this.hid = false;
    this.load = false;
    await this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
            this.load = true;
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
            this.load = true;
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);

          }
      }
  })
  
      if(!this.isSubScaneoLista) {
          this.isSubScaneoLista = true;
          this.qrScannerComponent.capturedQr.subscribe(result => {
            var cod = this.leerCodigo(result);
            if(cod == 'error') {
              this.mensaje='Ha ocurrido algo inesperado. Intentelo de nuevo';
              setTimeout(() => {
                this.mensaje ="";
               }, 3000);
            }else {
              this.capturarAsistencia(cod);
            }
        });

      }
      
  }

  detener() {
    this.hid = true;
    this.qrScannerComponent.stopScanning();
  }
  ngOnDestroy(): void {
    this.qrScannerComponent.capturedQr.unsubscribe();
  }

   leerCodigo(codigo: string): string {
    var l = '';
     try {
      var l =  CryptoJS.AES.decrypt(codigo, '9876543210').toString(CryptoJS.enc.Utf8);
     } catch (error) {
       l = 'error';
     }
    return l;
  }
  
   capturarAsistencia(correo: string){ 
    var l = '';
     this.clienteSubscription = this.db.getIdDocumentCorreo(correo).subscribe(resp =>{
       resp.map((e: any) => {
          l = e.payload.doc.id;
      });
      if(l == ''){
        this.mensaje = "No se pudo tomar asistencia, el usuario no existe";
        setTimeout(() => {
          this.mensaje ="";
         }, 3000);
      }
      else {
        this.db.updateParticipante(l);
        this.mensaje = "Se ha tomado asistencia con exito";
        setTimeout(() => {
          this.mensaje ="";
         }, 3000);
      }
    }, error => {
      this.mensaje = "Algo salio mal, intentelo de nuevo";
    });
  }
}
