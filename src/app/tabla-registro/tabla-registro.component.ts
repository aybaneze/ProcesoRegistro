import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-tabla-registro',
  templateUrl: './tabla-registro.component.html',
  styleUrls: ['./tabla-registro.component.css']
})
export class TablaRegistroComponent implements OnInit {
btn: string = '';
  employees = [
    {"nombre": 'Andrea', "Apellidos":'Ybañez Esquerre', "email": 'and@gmail.com' ,"foto" : "https://static.vix.com/es/sites/default/files/styles/large/public/imj/vivirsalud/L/Las-caracteristicas-de-los-diferentes-tipos-de-rostros-2.jpg?itok=c206hUf8"},
    {"nombre": 'Mercedes', "Apellidos":'Esquerre Vasquez', "email": 'mercedes@gmail.com', "foto" : "https://img.estadao.com.br/thumbs/640/resources/jpg/6/9/1488458374696.jpg"},
    {"nombre": 'Jhonatan', "Apellidos":'Ariza Quispe', "email": 'jwarizaq@gmail.com', "foto" : "http://assets.diarioregistrado.com/legacy/news/diarioregistrado/551b193d6c06f.jpg"}
  ]

model:any = {};

  addEmployee():void{
    this.employees.push(this.model);
    
  }

  deleteEmployee(i):void{
    let answer = confirm('Seguro que quieres eliminar a un miembro');
    if(answer){
      this.employees.splice(i,1)
    }
  }
MyValue;
  editEmployee(i):void{
    this.model.nombre = this.employees[i].nombre;
    this.model.Apellidos = this.employees[i].Apellidos;
    this.model.email = this.employees[i].email;
    this.MyValue= i;
    this.btn = 'Actualizar';
    
  }

  updateEmployee():void{
    let i = this.MyValue;
    for(let j = 0; j < this.employees.length; j++){
        if(i==j){
          this.employees[i] = this.model;
          this.model = {};
          this.btn = '';
        }
    }
  }

  constructor() { }

  ngOnInit() {
  }
 


}

/** @title Form field with error messages */
