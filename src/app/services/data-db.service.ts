import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { alumExternos } from '../models/alumExternos.interface';
import { alumnos } from '../models/alumnos.interface';
import { usersU } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private userCollection: AngularFirestoreCollection <usersU>;
  private alumnosCollection: AngularFirestoreCollection <alumnos>;
  private alumExternosCollection: AngularFirestoreCollection <alumExternos>;

  constructor(private afs: AngularFirestore, private afAlumnos: AngularFirestore, private afalumExternos: AngularFirestore) { 
    this.userCollection = afs.collection<usersU> ('usuarios');
    this.alumnosCollection = afAlumnos.collection<alumnos> ('alumnos');
    this.alumExternosCollection = afalumExternos.collection<alumExternos> ('alumnosExternos');
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
}
