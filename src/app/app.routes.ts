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
import { AuthGuardService, AuthGuardServiceFalse } from './services/autorizacion/autorizar.service';
import { ProgramaComponent } from './components/perfil/programa/programa.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent, canActivate:[AuthGuardServiceFalse]},
    {path: 'login', component: LoginComponent, canActivate:[AuthGuardServiceFalse] },
    {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuardService], children: [
        {path: 'congreso',component: RegistroCongresoComponent, outlet: 'seccion', },
        {path: 'constancia',component: ConstanciaComponent, outlet: 'seccion', },
        {path: 'programa',component: ProgramaComponent, outlet: 'seccion', },
    ]},
    {path: 'ponentes', component: PonentesComponent},
    {path: 'ponente/:id', component: PonenteComponent},
    {path: 'search/:busqueda', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
