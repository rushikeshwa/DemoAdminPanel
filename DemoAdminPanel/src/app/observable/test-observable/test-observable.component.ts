import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { apitestService } from 'src/app/shared/apitest.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'valueArray',
})
@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html'
})
export class TestObservableComponent implements OnInit {

  logs: Array<string> = [];
  promiseValue:any;
  LaptopHide:boolean=false;
  // Dell:any;
  // Hp:any;
  // NotAvailable:any;
  
    Dell= {
       brand: "Dell",
       hardDisk: "1TB",
       color: "Black",
       screenSize: "14",
       price: "30000"
     }
    HP= {
       brand: "HP",
       hardDisk: "500GB",
       color: "Silver",
       screenSize: "16",
       price: "36000"
     }
     NotAvailable= {
        brand: "Not Available",
        hardDisk: "Not Available",
        color: "Not Available",
        screenSize: "0",
        price: "0"
      }
   
  constructor(private api:apitestService) { }
  ngOnInit() {
  // this.getData().then(console.log);
  this.getData();
}
 promisesWork(){
  this.LaptopHide=true;
    //Promises
    let buyLaptop = new Promise((resolve, reject) => {
      // reject('Promises Rejected');
      // resolve('Promises Resolved');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is Purchased');
          // resolve(this.api.getLaptop().subscribe((laptop)=>{
          //   this.Dell=laptop.Dell;
          //   console.log(laptop.Dell);
          // }));
          resolve(this.Dell);
          this.LaptopHide=false;

        }, 4000);
      }
      else if (this.HpAvailable()) {
        return setTimeout(() => {
          // resolve('Hp is Purchased');
          // resolve(this.api.getLaptop().subscribe((laptop)=>{
          //   this.Hp=laptop.HP;
          // }));
          resolve(this.HP);
          this.LaptopHide=false;
        }, 4000);
      }
      else {
        return setTimeout(() => {
          // reject('Laptop is Not available in store');
          // reject(this.api.getLaptop().subscribe((laptop)=>{
          //   this.NotAvailable=laptop.NotAvailable;
          // }));
          resolve(this.NotAvailable);
          this.LaptopHide=false;
        }, 4000);
      }

    });

    buyLaptop.then(res => {
      console.log('then code =>', res);
      this.promiseValue=res;
    }).catch(res => {
      console.log('Catch code =>', res);
      this.promiseValue=res;
    })
  }

  DellAvailable() {

    return true;
  }
  HpAvailable() {
    return false;
 }

 //Async/Await : it always return promises.
 async getData(){
  //  return 'Data Received';
  let response=  this.awaitPromises;
  // console.log(response);

 }
 awaitPromises= new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('data Reviced');
    }, 3000);
 });

}