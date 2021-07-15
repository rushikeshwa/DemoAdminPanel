import { Component, OnInit } from '@angular/core';
import{ EmployeeServiceService} from '../shared/services/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  delete:boolean=false;
  collection: any;
  totalRecords:string;
  nameSearch:string='';
  page:number=1;

  constructor(private emp : EmployeeServiceService) { }

  ngOnInit() {
    this.emp.getList().subscribe((result)=>{
      this.collection = result;
      this.totalRecords=this.collection.result.length;

    })
  }

  //Delete Employee form List
  deleteEmp(id) {
    this.collection.splice(id-1,1)
    this.emp.deleteEmp(id).subscribe((id) => {
      console.log(id);
      this.delete = true;
    })
  }
  

}
