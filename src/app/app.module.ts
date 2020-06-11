import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import {FormsModule} from '@angular/forms';
import {PersonaService} from '../app/Service/persona.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ListarusrsComponent } from './Usuario/listarusrs/listarusrs.component';
import { AddusrComponent } from './Usuario/addusr/addusr.component';
import { EditusrComponent } from './Usuario/editusr/editusr.component';
import { UsuarioService } from './Service/usuario.service';
import { AuthenticationService } from './Service/authentication.service';
import { AuthGaurdService } from './Service/auth-gaurd.service' ;
import { LoginComponent } from './Usuario/login/login.component';
import { InterceptorService } from './Service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarusrsComponent,
    AddusrComponent,
    EditusrComponent,
    LoginComponent,
    AddComponent,
    EditComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PersonaService,
    UsuarioService, 
    AuthenticationService, 
    AuthGaurdService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
