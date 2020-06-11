import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import {  Usuario} from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-addusr',
  templateUrl: './addusr.component.html',
  styleUrls: ['./addusr.component.css']
})
export class AddusrComponent implements OnInit {

  constructor(private router:Router, private service:UsuarioService) { }

  usuario:Usuario = new Usuario();
  ngOnInit() {
  }

  GuardarUsuario(){
    this.service.createUsuario(this.usuario)
    .subscribe(data=>{
      alert("Se agregó el usuario correctamente");
      this.router.navigate(["listarusrs"]);
    })
  }

}
