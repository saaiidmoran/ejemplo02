import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private Url='http://localhost:8080/personasREST';
  private username = localStorage.getItem('usuario');
  private password = localStorage.getItem('clave');
  
  constructor(private http:HttpClient) { }  

  getPersonas(){

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Persona[]>(this.Url,{headers});

  }

  getPersonaId(id:number){
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Persona>(this.Url+"/buscarPorId/"+id,{headers});

  }

  getPersonaPorNombre(nombre:String){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.get<Persona>(this.Url+"/buscarPorNombre/"+nombre,{headers});
  }

  createPersona(persona:Persona){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.post<Persona>(this.Url+"/"+this.username,persona,{headers});
  }

  updatePersona(persona:Persona){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.put<Persona>(this.Url+"/"+persona.idpersona+"/"+this.username,persona,{headers});
  }

  deletePersona(persona:Persona){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.delete(this.Url+"/"+persona.idpersona,{headers});
  }
}