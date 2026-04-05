import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Reserva } from './components/reserva/reserva';
import { Admin } from './components/admin/admin';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { Home } from './components/home/home';
import { Registro } from './components/registro/registro';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'menu', component: Menu },
    { path: 'reservar', component: Reserva },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    
    { path: 'admin', component: Admin, canActivate: [authGuard] }, 
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }