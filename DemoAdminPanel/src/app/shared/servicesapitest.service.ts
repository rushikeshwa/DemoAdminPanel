import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student,OrderBook, Rates, LatestPrices } from './models/aptTestModels';

@Injectable({
  providedIn: 'root'
})
export class ServicesapitestService {

  languages:string="http://localhost:3000/languages";
  student:string="http://localhost:3000/student";
  orderbook:string="http://localhost:3000/orderbook";
  rates:string="http://localhost:3000/rates";
  latestprices:string="http://localhost:3000/latestprices";
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
  getLeatestPrice():Observable<LatestPrices>{
    return this.httpClient.get<LatestPrices>(this.latestprices);
  }
}
