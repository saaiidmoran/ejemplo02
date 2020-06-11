import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../Service/persona.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  constructor(private service:PersonaService, private router:Router) { }

  ngOnInit() {

    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })

  }

  Editar(persona:Persona):void{
    localStorage.setItem("id", persona.idpersona.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas = this.personas.filter(p=>p!==persona);
      alert("Persona eliminada correctamente");
    })
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

}
