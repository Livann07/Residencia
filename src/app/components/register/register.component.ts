import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup

 constructor(private _builder: FormBuilder) { 
    this.registerForm = this._builder.group({
      nombre: [''],
      apellidos: [''],
      correo: [''],
      confirmarCorreo: [''],
      pass: [''],
      confirmarPass: ['']
    })
  }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa un email valido';
    }
    return this.email.hasError('email') ? 'No es un email valido' : '';
  }

  enviar(values){
    console.log(values);
  }
  
}
