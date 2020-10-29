import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  login(usuario: string, correo: string, apellidos: string)
  {
    sessionStorage.setItem('correo', correo);
    sessionStorage.setItem('nombre', usuario);
    sessionStorage.setItem('apellidos', apellidos);
  }

  getNombreSesion()
  {
    if(this.verificarSesion()){
      return sessionStorage.getItem('nombre');
    }
  }
  getApellidosSesion()
  {
    if(this.verificarSesion()){
      return sessionStorage.getItem('apellidos');
    }
  }
  getCorreoSesion()
  {
    if(this.verificarSesion()){
      return sessionStorage.getItem('correo');
    }
  }
  verificarSesion()
  {
    if(sessionStorage.getItem('correo') != null){
      return true;
    }
    else {
      return false;
    }
  }

  logOut()
  {
    sessionStorage.clear();
  }
}
