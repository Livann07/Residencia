import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataDbService } from '../../services/data-db.service';
import { usersU } from '../../models/users.interface';
import { Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';



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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true;
  datos: any;
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  mat2 = new MyErrorStateMatcher2();
  clienteSubscription: Subscription;

 constructor(private _builder: FormBuilder, private dbData: DataDbService, private route: Router) {

    this.registerForm = this._builder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.email],
      confirmarCorreo: ['', Validators.email],
      pass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      confirmarPass: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
    }, {
      validators: [this.checkPasswords, this.checkCorreos]
    });
  }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email ]);
  email2 = new FormControl('', [Validators.required, Validators.email]);
  pass1 = new FormControl('', [Validators.required, Validators.minLength(6)]);


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa un email valido';
    }
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }
  getErrorMessage2() {
    if (this.email2.hasError('required')) {
      return 'Ingresa un email valido';
    }
    return this.email2.hasError('email') ? 'No es un email valido' : '';
  }
  getErrorPass1() {
    if (this.pass1.hasError('required')) {
      return 'Debe contener al menos 6 caracteres';
    }
  }

  revisarCorreo(values: usersU){
    this.clienteSubscription = this.dbData.getUser().subscribe(resp =>{
      this.datos = resp.map((e: any) => {
        return {
          nombre: e.payload.doc.data()['nombre'],
          apellidos: e.payload.doc.data()['apellidos'],
          correo: e.payload.doc.data()['correo'],
          pass: e.payload.doc.data()['pass'],
        };
      });
      var encontro = false;
      this.datos.forEach(element => {
        var ele: string = element.correo;
        var val: string = values.correo;
        if(ele.toLocaleLowerCase() == val.toLocaleLowerCase()){
          encontro = true;
        }
      });
      if(!encontro){
        this.enviar(values);
      }
      else{
        Swal.fire({
          allowOutsideClick: false,
          title: 'Error',
          icon: 'error', 
          text: 'Este correo ya esta registrado'
        });
      }
      this.clienteSubscription.unsubscribe();
    });
  }
  enviar(values: usersU){

    const nuevo = {
      nombre: values.nombre,
      apellidos: values.apellidos,
      correo: values.correo,
      pass: this.convertirPass(values.pass),
    }

    this.dbData.saveUsers(nuevo);
    this.borrarCampos();
    Swal.fire({
      allowOutsideClick: false,
      title: 'Usuario registrado con éxito',
      icon: 'success', 
      text: 'Inicia sesión para ingresar a tu cuenta',
      timer: 3000
    });
    this.route.navigate(['home']);
  }

  borrarCampos(){
    this.registerForm.reset();
  }
  
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.pass.value;
    let confirmPass = group.controls.confirmarPass.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  checkCorreos(group2: FormGroup) { // here we have the 'passwords' group
    let corre = group2.controls.correo.value;
    let confirmcorre = group2.controls.confirmarCorreo.value;

    return corre === confirmcorre ? null : { notSame2: true };
  }

  convertirPass(contra: string)
  {
    let l = CryptoJS.AES.encrypt(contra, '0123456789').toString();
    return l;
  }
}
