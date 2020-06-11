import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private username = localStorage.getItem('usuario');
  private password = localStorage.getItem('clave');
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/usuariosREST';

  getUsuarios(){

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuario[]>(this.Url,{headers});

  }

  getUsuarioId(id:number){

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuario>(this.Url+"/buscarPorId/"+id,{headers});

  }

  getUsuarioNombre(nombre:String){
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Usuario>(this.Url+"/buscarPorNombre/"+nombre,{headers});

  }

  createUsuario(usuario:Usuario){
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.post<Usuario>(this.Url,usuario,{headers});

  }  

  updateUsuario(usuario:Usuario){

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.put<Usuario>(this.Url+"/"+usuario.idusuario, usuario,{headers});

  }

  deleteUsuario(usuario:Usuario){
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.delete(this.Url+"/"+usuario.idusuario,{headers});

  }

}