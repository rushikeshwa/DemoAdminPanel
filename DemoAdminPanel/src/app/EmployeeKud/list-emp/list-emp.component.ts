import { Component, OnInit } from '@angular/core';
import { EmployeeKud } from 'src/app/shared/models/empkud.model';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employee:EmployeeKud[]=[
    {
      id:1,
      name:'Rushikesh',
      gander:'male',
      contactPreferance:'Sandeep',
      email:'rushikesh.ware@gmail.com',
      dateOfBirth:new Date('07/17/1993'),
      department:'Development',
      isActive:true,
      photoPath:'assets/img/person.png',
      phoneNumber:9405404345
    },
    {
      id:2,
      name:'Mark',
      gander:'male',
      contactPreferance:'Jhon',
      email:'mark@gmail.com',
      dateOfBirth:new Date('07/07/2044'),
      department:'Testing',
      isActive:true,
      photoPath:'assets/img/person.png',
      phoneNumber:44949494949
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
