import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student,OrderBook, Rates, LatestPricesObject,MyDataType ,Laptop } from './models/aptTestModels';

@Injectable({
  providedIn: 'root'
})
export class apitestService {

  languages:string="http://localhost:3000/languages";
  student:string="http://localhost:3000/student";
  orderbook:string="http://localhost:3000/orderbook";
  rates:string="http://localhost:3000/rates";
  latestprices:string="http://localhost:3000/latestprices";
  laptop:string="http://localhost:3000/laptop";
  
  
  mydata:MyDataType[]=[
    {"id":1, "data":"Dummy Order Data"},
    {"id":2, "data":"Angular Observables"}
  ]

  constructor(private httpClient:HttpClient) { }

  getLanguages():Observable<object>{
    return this.httpClient.get(this.languages); 
  }
  getStudent():Observable<Student>{
    return this.httpClient.get<Student>(this.student); 
  }
  getOrderBook():Observable<OrderBook>{
    return this.httpClient.get<OrderBook>(this.orderbook);
  }
  getRates():Observable<Rates>{
    return this.httpClient.get<Rates>(this.rates);
  }
  getLeatestPrice():Observable<LatestPricesObject>{
    return this.httpClient.get<LatestPricesObject>(this.latestprices);
  }

  getMyDataType():Observable<MyDataType[]>
  {
    let data= new Observable<MyDataType[]>(observer =>
      {
      setTimeout(() => 
      {
          observer.next(this.mydata);
      }, 2000);
    });
    return data;
  }
  getLaptop():Observable<Laptop>{
    return this.httpClient.get<Laptop>(this.laptop);
  }

}
