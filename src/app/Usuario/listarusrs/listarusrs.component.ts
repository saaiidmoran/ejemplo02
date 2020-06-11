import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioService } from '../../Service/usuario.service';


@Component({
  selector: 'app-listarusrs',
  templateUrl: './listarusrs.component.html',
  styleUrls: ['./listarusrs.component.css']
})
export class ListarusrsComponent implements OnInit {

  usuarios:Usuario[];
  constructor(private service:UsuarioService, private router:Router) { }

  ngOnInit() {

    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })

  }

  EditarUsuario(usuario:Usuario):void{
    localStorage.setItem("idusuario", usuario.idusuario.toString());
    this.router.navigate(["editusr"]);
  }

  DeleteUsuario(usuario:Usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios = this.usuarios.filter(u=>u!==usuario);
      alert("Usuario eliminado correctamente")
    })
  }

  AgregarUsuarios(){
    this.router.navigate(["addusr"]);
  }

}