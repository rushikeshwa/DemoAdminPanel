import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EmployeeServiceService } from 'src/app/shared/services/employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  alert:boolean=false;
  collection={};

  updateEmployee=new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('', Validators.required),
    dept:new FormControl(''),
    mobile:new FormControl(''),
    gender:new FormControl(''),
    picture:new FormControl('')
  })

  constructor( private emp:EmployeeServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.emp.getCurrentEmp(this.route.snapshot.params.id).subscribe((result)=>{
      
      console.log(result);
      this.collection=result;


      this.updateEmployee=new FormGroup({
        name: new FormControl(result['name']),
        email:new FormControl(result['email']),
        dept:new FormControl(result['dept']),
        mobile:new FormControl(result['mobile']),
        picture:new FormControl(result['picture']),
        gender:new FormControl(result['gender']),
      })
    });
  }
  
  updateEmployeeInfo(){
    this.emp.updateResto(this.route.snapshot.params.id, this.updateEmployee.value).subscribe(()=>{
      console.log('Updated Information');
      this.alert=true;
      this.updateEmployee.reset();   
    })
  }

  // Only Numbers with Decimals
  keyPressNumbersDecimal(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  

  get f(){
    return this.updateEmployee.controls;
  }
  get name() {return this.updateEmployee.get('name')}
  get email() {return this.updateEmployee.get('email')}
  get mobile() {return this.updateEmployee.get('mobile')}
}
