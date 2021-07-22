import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/shared/services/employee-service.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // variable declaration
  alert: boolean = false;
  goToList:boolean=false;

// form group
  addEmployee = new FormGroup({
    dept: new FormControl(''),
    gender: new FormControl('',),
    mobile: new FormControl('', [Validators.required, Validators.min(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    picture: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  constructor(private emp: EmployeeServiceService,) { }

  ngOnInit() {

  }

  // Mobile Numbers with Decimals validation
  keyPressNumbersDecimal(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
  
  
  // add employee api
  collectEmployee() {
    this.emp.saveEmpInfo(this.addEmployee.value).subscribe((result) => {
      console.log(result);
      this.addEmployee.reset();
      this.alert = true;
      this.goToList=true;
      // console.log(this.addEmployee.value);
    })
  }
  // Form Validaiton start here
  get f() {
    return this.addEmployee.controls;
  }

  get name() { return this.addEmployee.get('name') }
  get email() { return this.addEmployee.get('email') }
  get mobile() { return this.addEmployee.get('mobile') }
  get picture() { return this.addEmployee.get('picture') }
}
