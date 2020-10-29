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

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil', component: PerfilComponent, children: [
        {path: 'congreso',component: RegistroCongresoComponent, outlet: 'congre', },
    ]},
    {path: 'ponentes', component: PonentesComponent},
    {path: 'ponente/:id', component: PonenteComponent},
    {path: 'search/:busqueda', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
