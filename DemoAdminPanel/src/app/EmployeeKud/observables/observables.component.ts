import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesapitestService } from 'src/app/shared/servicesapitest.service';
import { observable, Observable } from 'rxjs';
import { OrderBook } from 'src/app/shared/models/aptTestModels';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  MyBuyOrder:any;
  MySellOrder:any;
  leatestBtc:any;
  leatestLtc:any;
  leatestDoge:any;
  timeStamp;
  status;

  ngOnInit(){
  //  this.getLanguages(); 
  //  this.getStudent();
   this.getOrderBook();
   this.getRates();
   this.getLeatestPrice();
  }
  constructor(private http:HttpClient, private api:ServicesapitestService) { }

  getLanguages(){
    this.api.getLanguages().subscribe((data)=>{
      console.log(data);
    });
  }
  getStudent(){
    this.api.getStudent().subscribe((student)=>{
      console.log(student);
    });
  }
  getOrderBook(){
    this.api.getOrderBook().subscribe((orderBook)=>{
      // console.log(orderBook);
      this.MyBuyOrder=orderBook.BuyOrders;
      this.MySellOrder=orderBook.SellOrders;
      this.timeStamp=orderBook.CreatedTimestampUtc;   
    });
  }

  getRates(){
    this.api.getRates().subscribe((rates)=>{
      console.log(rates);
      // alert(JSON.stringify(rates));
      // alert(rates[0].CurrencyCodeA);
    });
  }
  getLeatestPrice(){
    this.api.getLeatestPrice().subscribe((leatestPrice)=>{
      // alert(JSON.stringify(leatestPrice));
      this.status=leatestPrice.status;
      this.leatestBtc=leatestPrice.prices.btc;
      this.leatestLtc=leatestPrice.prices.ltc;
      this.leatestDoge=leatestPrice.prices.doge;
      console.log(leatestPrice.prices.btc);
      console.log(leatestPrice.prices.ltc);
      console.log(leatestPrice.prices.doge);
    });
  }
}
