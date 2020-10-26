import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPonentesService {

  private ponentes: Ponentes[] = [
    {
      nombre: 'Giovanni',
      correo: 'g@gmail.com',
      taller: 'el que quieras',
      nomConferencia: 'El gio',
      institucion: 'itlm',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/covid.jpg',
    },
    {
      nombre: 'Liván',
      correo: 'tm@gmail.com',
      taller: 'Esperanza de mejico',
      nomConferencia: 'Te odio',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/frutas.svg',
    },
    {
      nombre: 'amlo',
      correo: 'im@gmail.com',
      taller: 'Esperanza de mejico',
      nomConferencia: 'Te odio',
      institucion: 'ITLM',
      desConferencia: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores modi rem tenetur voluptatibus quia, neque corrupti ipsam voluptate omnis earum ipsa praesentium nesciunt, facere tempora inventore recusandae amet quos consequuntur.',
      img: 'assets/img/pokemon.png',
    },
  ];

constructor(){
    console.log('servicio listo para usar!!!');
}

getPonentes(){
    return this.ponentes;
}

getPonente(idx: string){
  return this.ponentes[idx];
}

buscarPonente(termino: string): Ponentes[] {
  let ponenteArr: Ponentes[] = [];

  termino = termino.toLowerCase();
  for( let i = 0; i <this.ponentes.length; i++){
  // for(let heroe of this.heores){
    let ponente = this.ponentes[i];
    let nombre = ponente.nombre.toLowerCase();
    if(nombre.indexOf(termino)>=0){
      ponente.idx = i;
      ponenteArr.push(ponente)
    }
  }

  return ponenteArr;
}
}

export interface Ponentes{
  nombre: string;
  correo: string;
  taller: string;
  nomConferencia: string;
  institucion: string;
  desConferencia: string;
  img: string;
  idx?: number;
}

