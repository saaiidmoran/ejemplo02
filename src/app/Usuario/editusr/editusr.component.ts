import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Service/usuario.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-editusr',
  templateUrl: './editusr.component.html',
  styleUrls: ['./editusr.component.css']
})
export class EditusrComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:UsuarioService) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    let id = localStorage.getItem("idusuario");
    localStorage.removeItem('idusuario');
    this.service.getUsuarioId(+id)
    .subscribe(data=>{
      this.usuario=data;
    })
  }

  Actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se actualizó el usuario con éxito");
      this.router.navigate(["listarusrs"]);
    })
  }

}
