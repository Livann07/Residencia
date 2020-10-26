import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  login(usuario: string, correo: string)
  {
    sessionStorage.setItem('correo', correo);
    sessionStorage.setItem('nombre', usuario);
  }

  getNombreSesion()
  {
    if(this.verificarSesion()){
      return sessionStorage.getItem('nombre');
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
