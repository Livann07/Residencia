import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { usersU } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private userCollection: AngularFirestoreCollection <usersU>;

  constructor(private afs: AngularFirestore) { 
    this.userCollection = afs.collection<usersU> ('usuarios');
  }

  saveUsers(newUser: usersU): void{
    this.userCollection.add(newUser);
  }
}
