import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo02';

  constructor(private loginService:AuthenticationService, private router:Router){}

  ngOnInit() {
    if(!this.loginService.usuariologueado()){
      this.router.navigate(["login"]); 
    }
  }

  Listar(){
    this.router.navigate(["listar"]);    
  }

  ListarUsuarios(){
    this.router.navigate(["listarusrs"]);
  }

  Logout(){
    this.loginService.logout();
    this.router.navigate(["login"]);
  }

}
