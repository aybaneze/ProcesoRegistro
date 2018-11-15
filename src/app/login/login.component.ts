import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'registro-proceso';
  model : any={};
  public hide: boolean = false;
  
  Signin(): void{
    if(this.model.email === "andrea@gmail.com" && this.model.pass == "123456"){
      this.router.navigate(['/perfil']);
      alert("correcto")
  } else{
    alert("Usuarios Incorrectos")
  }
}
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
