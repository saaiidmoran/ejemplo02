import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  clave = '';

  constructor(private router:Router,private loginservice:AuthenticationService) { }

  ngOnInit() {
    if(!this.loginservice.usuariologueado()){}
    else{
      this.router.navigate(['']);
    }
  }

  checkLogin(){

    this.loginservice.autenticar(this.usuario,this.clave);
    
  }

}
