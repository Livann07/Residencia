import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SesionService } from '../../services/sesion.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private sesion: SesionService){

  }
  canActivate() {
    if (this.sesion.verificarSesion()) {
     return true;
    } else {
     return false;
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceFalse implements CanActivate {
  constructor(private ses: SesionService){

  }
  canActivate() {
    if (!this.ses.verificarSesion()) {
      return true;
     } else {
      return false;
     }
  }
}

//////////////////////////
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService2 implements CanActivate {
  constructor(private sesion: SesionService){

  }

  canActivate(){
    if (this.sesion.verificarAdmin()){
      return true;
    }else {
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceFalse2 implements CanActivate {
  constructor(private ses: SesionService){

  }
  
  canActivate(){
    if (!this.ses.verificarAdmin()){
      return true;
    }else {
      return false;
    }
  }

}