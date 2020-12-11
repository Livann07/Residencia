import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataDbService } from '../../services/data-db.service';
import { usersU } from '../../models/users.interface';
import { Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

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

}
