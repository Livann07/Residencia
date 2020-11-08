import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { alumExternos } from '../models/alumExternos.interface';
import { alumnos } from '../models/alumnos.interface';
import { participantes } from '../models/participantesCongreso';
import { usersU } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private userCollection: AngularFirestoreCollection <usersU>;
  private alumnosCollection: AngularFirestoreCollection <alumnos>;
  private alumExternosCollection: AngularFirestoreCollection <alumExternos>;
  private participanteCongreso: AngularFirestoreCollection <participantes>;

  constructor(private afs: AngularFirestore, private afAlumnos: AngularFirestore, private afalumExternos: AngularFirestore, private partCongre: AngularFirestore) { 
    this.userCollection = afs.collection<usersU> ('usuarios');
    this.alumnosCollection = afAlumnos.collection<alumnos> ('alumnos');
    this.alumExternosCollection = afalumExternos.collection<alumExternos> ('alumnosExternos');
    this.participanteCongreso = partCongre.collection<participantes> ('participantes');
  }

  saveUsers(newUser: usersU): void{
    this.userCollection.add(newUser);
  }
  saveAlumnos(newAlum: alumnos): void{
    this.alumnosCollection.add(newAlum);
  }
  saveAlumExterno(newAlumExternos: alumExternos): void{
    this.alumExternosCollection.add(newAlumExternos);
  }
  saveParticipante(newParticipante: participantes): void{
    this.participanteCongreso.add(newParticipante);
  }

  getUser()
  {
    return this.userCollection.snapshotChanges();
  }
  getAlumnos()
  {
    return this.alumnosCollection.snapshotChanges();
  }
  getAlumExterno()
  {
    return this.alumExternosCollection.snapshotChanges();
  }
  getparticipantes()
  {
    return this.participanteCongreso.snapshotChanges();
  }
}
