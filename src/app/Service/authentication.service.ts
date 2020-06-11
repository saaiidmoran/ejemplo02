import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private Url='http://localhost:8080/usuariosREST';

  constructor(private router:Router,private http:HttpClient) { }
  

  autenticar(username,clave){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + clave) });
    this.http.get<Usuario>(this.Url+"/buscarPorNombre/"+username,{headers})
    .subscribe(
      data => {
        localStorage.setItem('usuario',username);
        localStorage.setItem('clave',clave);
        this.router.navigate(['listarusrs']);
      },
      error => {
        alert('Credenciales incorrectas');
      }
    );    
  }

  usuariologueado(){
    let usuario = localStorage.getItem('usuario');
    let clave = localStorage.getItem('clave');
    return !(usuario === null) && !(clave === null);
  }

  logout(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('clave');
  }

}
