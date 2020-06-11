import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarusrsComponent } from './Usuario/listarusrs/listarusrs.component';
import { AddusrComponent } from './Usuario/addusr/addusr.component';
import { EditusrComponent } from './Usuario/editusr/editusr.component';
import { LoginComponent } from './Usuario/login/login.component';

import { AuthGaurdService } from './Service/auth-gaurd.service' ;


const routes: Routes = [
  {path:'listar',component:ListarComponent, canActivate:[AuthGaurdService]},
  {path:'add',component:AddComponent, canActivate:[AuthGaurdService]},
  {path:'edit',component:EditComponent, canActivate:[AuthGaurdService]},
  {path: 'listarusrs',component:ListarusrsComponent, canActivate:[AuthGaurdService]},
  {path: 'addusr',component:AddusrComponent, canActivate:[AuthGaurdService]},
  {path: 'editusr', component:EditusrComponent, canActivate:[AuthGaurdService]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
