import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PonentesComponent } from './components/ponentes/ponentes/ponentes.component';
import { PonenteComponent } from './components/ponentes/ponente/ponente.component';
import { SearchComponent } from './components/search/search.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroCongresoComponent } from './components/perfil/registro-congreso/registro-congreso.component';
import { ConstanciaComponent } from './components/perfil/constancia/constancia.component';
import { AuthGuardService, AuthGuardServiceFalse, AuthGuardService2, AuthGuardServiceFalse2, AuthGuardServiceCongreso, AuthGuardServiceCongresoFalse } from './services/autorizacion/autorizar.service';
import { ProgramaComponent } from './components/perfil/programa/programa.component';
import { PerfilAdminComponent } from './components/perfil-admin/perfil-admin.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { PerfilCongresoComponent } from './components/perfil-congreso/perfil-congreso.component';
import { AgregarConferencistasComponent } from './components/agregar-conferencistas/agregar-conferencistas.component';
import { RecuperacionComponent } from './components/recuperacion/recuperacion.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent, canActivate:[AuthGuardServiceFalse]},
    {path: 'login', component: LoginComponent, canActivate:[AuthGuardServiceFalse] },
    {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuardService, AuthGuardServiceFalse2, AuthGuardServiceCongresoFalse], children: [
        {path: 'congreso',component: RegistroCongresoComponent, outlet: 'seccion', },
        {path: 'constancia',component: ConstanciaComponent, outlet: 'seccion', },
        {path: 'programa',component: ProgramaComponent, outlet: 'seccion', },
    ]},
    {path:'agregar-conferencistas',component: AgregarConferencistasComponent, canActivate:[AuthGuardService2]},
    {path: 'perfil-admin',component: PerfilAdminComponent, canActivate:[AuthGuardService2]},
    {path: 'asistentes', component: AsistentesComponent, canActivate:[AuthGuardService2]},
    {path: 'asistencia', component: PerfilCongresoComponent, canActivate:[AuthGuardServiceCongreso]},
    {path: 'ponentes', component: PonentesComponent},
    {path: 'recuperar', component: RecuperacionComponent, canActivate:[AuthGuardServiceFalse]},
    {path: 'ponente/:id', component: PonenteComponent},
    {path: 'search/:busqueda', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
