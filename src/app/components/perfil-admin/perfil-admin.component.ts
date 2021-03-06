import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataDbService } from '../../services/data-db.service';
import { usersU } from '../../models/users.interface';
import { Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { Observable, Subscription } from 'rxjs';

// ? *********************************
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.touched && control.parent && control.parent.invalid && control.parent.dirty && control.parent.hasError('notSame'));

    return invalidParent;
  }
}
export class MyErrorStateMatcher2 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.touched && control.parent && control.parent.invalid && control.parent.dirty && control.parent.hasError('notSame2'));

    return invalidParent
  }
}

// ? ************************************


@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {

  hide = true;
  hide2 = true;
  editForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  mat2 = new MyErrorStateMatcher2();
  suscripcionD : Subscription;
  datos: any;
  datosHabConst: any;
  cambio : Boolean = false;
  
  constructor(private _builder: FormBuilder, private dbData: DataDbService, private route: Router) {
    this.editForm = this._builder.group({
      nombre:[''],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      confirmarPass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    }, {
      validators: [this.checkPasswords]
    });
    this.getValorConstanciaDesdeInicio();
    setTimeout(() => {
      //this.datosHabConst = localStorage.getItem('valido');
      ////////console.log('ese' + this.cambio);
      //this.cambio = this.datosHabConst;
    }, 1000);
    
  }

  ngOnInit(): void {
  }

  enviar(values: usersU){
    
    const editado = {
      apellidos: 'ADMIN',
      correo: 'admin@admin.com',
      nombre: 'ADMIN',
      pass: this.convertirPass(values.pass),
    }

    this.dbData.updateUserAdmin(editado, 'X0b0nb7fRnuhyFi9Th86');
    this.borrarCampos();
    Swal.fire({
      allowOutsideClick: false,
      title: 'Usuario editado con éxito',
      icon: 'success', 
      text: 'Edición exitosa',
      timer: 3000
    });
    //console.log(this.dbData.getTodo());
  }

  cambiarConstancias(){
    var ls;
    this.suscripcionD = this.dbData.getValorConstancia().subscribe(resp =>{
      this.datosHabConst = resp.map(e => e.payload.doc.data());
      localStorage.setItem('valido', JSON.stringify(this.datosHabConst));
      this.suscripcionD.unsubscribe();
      this.datosHabConst.forEach(element => {
         ls = element['constancias'];
      });

      const editado ={
        constancias: !ls
      }
      this.dbData.updateHabilitarConstancias(editado);
      this.datosHabConst= editado;
    });

    this.cambio=!this.cambio;
    
  }

  pass1 = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorPass1() {
    if (this.pass1.hasError('required')) {
      return 'Debe contener al menos 6 caracteres';
    }
  }

  borrarCampos(){
    this.editForm.reset();
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.pass.value;
    let confirmPass = group.controls.confirmarPass.value;

    return pass === confirmPass ? null : { notSame: true }
  }


  convertirPass(contra: string)
  {
    let l = CryptoJS.AES.encrypt(contra, '0123456789').toString();
    return l;
  }

  getValorConstanciaDesdeInicio(): any{
    var ls;
    this.suscripcionD = this.dbData.getValorConstancia().subscribe(resp =>{
      var datosHabConst = resp.map(e => e.payload.doc.data());
      localStorage.setItem('valido', JSON.stringify(datosHabConst));
      this.suscripcionD.unsubscribe();
      datosHabConst.forEach(element => {
         ls = element['constancias'];
      });

      const editado ={
        constancias: ls
      }
      this.cambio = ls;
    });
  }

}
