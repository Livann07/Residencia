import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlDirective, NgForm, Validators} from '@angular/forms';
import { DataDbService } from '../../services/data-db.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  datos: any;
  loginForm: FormGroup;
  sesionActiva = this.sesi.verificarSesion();
  

  constructor(private dbData: DataDbService, private _builder: FormBuilder, public sesi: SesionService) { 
    this.loginForm = this._builder.group({
      correo: [''],
      contra: ['']
    })
  }

  ngOnInit(): void {
  }

  verificar(values: any)
  {
    this.recibir(values);
  }

  recibir(values: any)
  {
    this.dbData.getUser().subscribe(resp =>{
      this.datos = resp.map((e: any) => {
        return {
          nombre: e.payload.doc.data()['nombre'],
          apellidos: e.payload.doc.data()['apellidos'],
          correo: e.payload.doc.data()['correo'],
          pass: e.payload.doc.data()['pass'],
        };
      })
      this.mostrar(values);
    });
  }
  mostrar(values: any)
  {
    var l = false;
    this.datos.forEach(element => {
      if(element.correo == values.correo)
      {
        this.sesi.login(element.nombre,element.correo);
        this.sesionActiva = true;
        l = true;
      }
    });
    if(l == false)
    {
      this.sesionActiva = false;
    }
  }
}
