import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html'
})
export class TestObservableComponent implements OnInit {

  logs: Array<string> = [];
  promiseValue:any;
  constructor() { }
  ngOnInit() {
    this.logs;
    let source$ = new Observable(subscriber => {
      this.logs.push('>>>>>>Created Observable')
      subscriber.next('This is subscriber.next()')
      subscriber.next('This is subscriber.next()2');

    });
    source$.subscribe(
      x => this.log(x),
      // error=>this.log("error"),
      error => this.log(error),
      () => this.log('>>>>>>>>>Completed Observabler')
    );

    //Promises

    let buyLaptopFun = new Promise(function (resolve, reject) {
      resolve('Promises Resolved');
    });
    let buyLaptop = new Promise((resolve, reject) => {
      // reject('Promises Rejected');
      // resolve('Promises Resolved');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is Purchased');
        }, 4000);
      }
      else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is Purchased');
        }, 4000);
      }
      else {
        return setTimeout(() => {
          reject('Laptop is Not available in store');
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





  private log(messages): void {
    this.logs.push(messages)
    // throw new Error('Method not implemented.';);
  }

  DellAvailable() {

    return false;
  }
  HpAvailable() {
    return false;
  }
}
