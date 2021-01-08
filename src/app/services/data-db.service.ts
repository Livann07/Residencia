import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { alumExternos } from '../models/alumExternos.interface';
import { alumnos } from '../models/alumnos.interface';
import { participantes } from '../models/participantesCongreso';
import { usersU } from '../models/users.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private userCollection: AngularFirestoreCollection <usersU>;
  private alumnosCollection: AngularFirestoreCollection <alumnos>;
  private alumExternosCollection: AngularFirestoreCollection <alumExternos>;
  private participanteCongreso: AngularFirestoreCollection <participantes>;
  private habilitar: AngularFirestoreCollection ;
  private usersCollec: Observable<usersU[]>;
  private itemDoc:AngularFirestoreDocument<usersU>;
  private constanciasDoc: AngularFirestoreDocument<any>;
  private participanteUnico: AngularFirestoreCollection <participantes>;
  private itemParti:AngularFirestoreDocument<participantes>;
  suscripcionD : Subscription;

  constructor(private afs: AngularFirestore, private afAlumnos: AngularFirestore, private afalumExternos: AngularFirestore, private partiUnico: AngularFirestore,  private partCongre: AngularFirestore, private hab: AngularFirestore) { 
    this.userCollection = afs.collection<usersU> ('usuarios');
    this.alumnosCollection = afAlumnos.collection<alumnos> ('alumnos');
    this.alumExternosCollection = afalumExternos.collection<alumExternos> ('alumnosExternos');
    this.habilitar = hab.collection ('constancias');
    this.participanteCongreso = partCongre.collection<participantes> ('participantes');
    this.usersCollec = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as usersU;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   
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
    window.location.reload();
  }

  updateUserAdmin(editUser: usersU, id):void{
    this.itemDoc=this.afs.doc<usersU>("usuarios/"+id);
    this.itemDoc.update(editUser);
  }
  updateParticipante(id: string):void{
    this.itemParti =this.partCongre.doc<participantes>("participantes/"+id);
    this.itemParti.update({asistio: "si"});
  }

  updateHabilitarConstancias(editConstancias : any): void{
    this.constanciasDoc = this.hab.doc("constancias/cons");
    this.constanciasDoc.update(editConstancias);
  }

  getIdDocumentCorreo(correo: string) {
    this.participanteUnico = this.partiUnico.collection<participantes>('participantes', ref => ref.where('correo', '==', correo));
    return this.participanteUnico.snapshotChanges();
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
  
  getValorConstancia(){
    return this.habilitar.snapshotChanges();
  }

  getValorConstanciaDesdeInicio(): any{
    var ls;
    this.suscripcionD = this.getValorConstancia().subscribe(resp =>{
      var datosHabConst = resp.map(e => e.payload.doc.data());
      localStorage.setItem('valido', JSON.stringify(datosHabConst));
      this.suscripcionD.unsubscribe();
      datosHabConst.forEach(element => {
         ls = element['constancias'];
      });

      const editado ={
        constancias: ls
      }
    });
  }
 
}
