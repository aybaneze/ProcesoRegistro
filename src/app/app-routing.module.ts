import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablaRegistroComponent} from './tabla-registro/tabla-registro.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [ 
  {path: '', component: LoginComponent},
  {path: 'perfil', component:TablaRegistroComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
