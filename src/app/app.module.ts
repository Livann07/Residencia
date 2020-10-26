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
import {MatCardModule} from '@angular/material/card';
import { SesionService } from './services/sesion.service';
// firebase
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DataDbService } from './services/data-db.service';
import { LoginComponent } from './components/login/login.component';
import { PonenteTarjetaComponent } from './components/ponentes/ponente-tarjeta/ponente-tarjeta.component';
import { DataPonentesService } from './services/ponentes/data-ponentes.service';
import { PonenteComponent } from './components/ponentes/ponente/ponente.component';
import { PonentesComponent } from './components/ponentes/ponentes/ponentes.component';
import { SearchComponent } from './components/search/search.component';




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
    SearchComponent
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
    MatCardModule
  ],
  providers: [
    DataDbService,
    DataPonentesService,
    SesionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
