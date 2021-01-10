import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Subscription } from 'rxjs';
import { DataDbService } from '../../services/data-db.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  isLinear = false;
  primerForm: FormGroup;
  segundoForm: FormGroup;
  tercerForm: FormGroup;
  clienteSubscription: Subscription;
  datos: any;
  codigo: Number;
  textoCodigoError: String;
  id: string;
  constructor(private _formBuilder: FormBuilder,private dbData: DataDbService,private route: Router) { 
    this.codigo = 0;
    this.textoCodigoError = "";
    this.id = "";
  }

  ngOnInit(): void {
    this.primerForm = this._formBuilder.group({
      primerCtrl: ['', Validators.required]
    });
    this.segundoForm = this._formBuilder.group({
      segundoCtrl: ['', Validators.required]
    });
    this.tercerForm = this._formBuilder.group({
      tercerCtrl: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])]
    });
  }
 
  avanzar(){
    this.myStepper.next();
  }

  retroceder(){
    this.myStepper.previous();
  }

  checarCorreo() {
    if(this.esCuentaUsuario(this.primerForm.controls.primerCtrl.value)){
      this.clienteSubscription = this.dbData.getUser().subscribe(resp =>{
        this.datos = resp.map((e: any) => {
          return {
            nombre: e.payload.doc.data()['nombre'],
            apellidos: e.payload.doc.data()['apellidos'],
            correo: e.payload.doc.data()['correo'],
            pass: e.payload.doc.data()['pass'],
            id: e.payload.doc.id,
          };
        });
        this.mostrar();
        this.clienteSubscription.unsubscribe();
      });
    }
    this.avanzar();
  }
  mostrar()
  {
    this.datos.forEach(element => {
      if(element.correo == this.primerForm.controls.primerCtrl.value)
      {
        this.id = element.id;
        this.codigo = this.numero();
        this.enviarCorreo();
      }
    });
  }

  enviarCorreo() {
    var templateParams = {
      correo: this.primerForm.controls.primerCtrl.value,
      codigo: this.codigo,
    };
    
    emailjs.send('service_ci2fpe9', 'template_kh42s8o', templateParams, 'user_5hlJQJ5qwhMQguqnezChl')
    .then((result: EmailJSResponseStatus) => {
      
    }, (error) => {

    });
  }

  numero(){
    var num = Math.round(Math.random() * (999999999 - 100000000) + parseInt('100000000'));
    return num;
  }

  validarCodigo() {
    if(this.codigo.toString() == this.segundoForm.controls.segundoCtrl.value) {
      this.codigo = 0;
      this.avanzar();
    }
    else {
      this.textoCodigoError = "El codigo es incorrecto";
      setTimeout(() => {
        this.textoCodigoError = "";
      }, 3000);
    }
  }

  actualizarPass(){
    let pass = this.convertirPass(this.tercerForm.controls.tercerCtrl.value);
    this.dbData.updateUsuarios(this.id, pass);
    this.route.navigate(['login']);
  }

  convertirPass(contra: string)
  {
    let l = CryptoJS.AES.encrypt(contra, '0123456789').toString();
    return l;
  }

  esCuentaUsuario(correo: string){
    if(correo == "admin@admin.com" || correo == "congreso@congreso.com"){
      return false;
    }
    else{
      return true;
    }
  }
}
