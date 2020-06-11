import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/Service/persona.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:PersonaService) { }

  persona:Persona = new Persona();
  ngOnInit() {
  }

  Guardar(){

    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se agregó la persona correctamente");
      this.router.navigate(["listar"]);
    })

  }

}
