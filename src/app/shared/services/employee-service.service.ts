import { Injectable } from '@angular/core';
import { MainURL } from '../constant/configUrl';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  // url = "http://localhost:3000/employee";
  url=MainURL.empUrl;

  constructor(private http: HttpClient) { }


  getList() {
    return this.http.get(this.url);
  }
  saveEmpInfo(data) {
    return this.http.post(this.url, data);
  }
  deleteEmp(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentEmp(id){
    return this.http.get(`${this.url}/${id}`);
  }

  updateResto(id,data){
    return this.http.put(`${this.url}/${id}`,data);
    
  }
}

