import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { SesionService } from './services/sesion.service';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { PonenteTarjetaComponent } from './components/ponentes/ponente-tarjeta/ponente-tarjeta.component';
import { DataPonentesService } from './services/ponentes/data-ponentes.service';
import { PonenteComponent } from './components/ponentes/ponente/ponente.component';
import { PonentesComponent } from './components/ponentes/ponentes/ponentes.component';
import { SearchComponent } from './components/search/search.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthGuardService, AuthGuardServiceFalse } from './services/autorizacion/autorizar.service';
import { ConstanciaComponent } from './components/perfil/constancia/constancia.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
// firebase
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { DataDbService } from './services/data-db.service';
import { RegistroCongresoComponent } from './components/perfil/registro-congreso/registro-congreso.component';
import { PonenteSeleccionComponent } from './components/ponentes/ponente-seleccion/ponente-seleccion.component';
import { ProgramaComponent } from './components/perfil/programa/programa.component';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { PerfilCongresoComponent } from './components/perfil-congreso/perfil-congreso.component';
import { AgregarConferencistasComponent } from './components/agregar-conferencistas/agregar-conferencistas.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    PonenteTarjetaComponent,
    PonenteComponent,
    PonentesComponent,
    SearchComponent,
    PerfilComponent,
    RegistroCongresoComponent,
    PonenteSeleccionComponent,
    ConstanciaComponent,
    ProgramaComponent,
    PerfilAdminComponent,
    AsistentesComponent,
    PerfilCongresoComponent,
    AgregarConferencistasComponent,
    ModalComponent,
    NoimagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    QRCodeModule,
    NgQrScannerModule,
  ],
  providers: [
    DataDbService,
    DataPonentesService,
    SesionService,
    AuthGuardService,
    AuthGuardServiceFalse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
