import { Component, OnInit } from '@angular/core';
import { subtract } from 'ngx-bootstrap/chronos';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  arr: any[] = ['dddd', 1233, true, 'dsddddd'];

  constructor() { }
  ngOnInit() {
    console.log('Location');
    // this.loaction();
    this.simpleObservable();
    this.sequenceSub();

    
  }
  // loaction() {
  //   const location = new Observable((observer) => {
  //     let watchId: number;
  //     if ('geolocation' in navigator) {
  //       watchId = navigator.geolocation.watchPosition(
  //         (position: GeolocationPosition) => {
  //           observer.next(position);
  //         },
  //         (error: GeolocationPositionError) => {
  //           observer.error(error);
  //         });
  //     } else {
  //       observer.error('GeoLocation Not Available');
  //     }
  //     return {
  //       unsubscribe() {
  //         navigator.geolocation.clearWatch(watchId);
  //       }
  //     }
  //   });

  //   // Call subscribe() to start listening for updates.
  //   const locationsSubscription = location.subscribe({
  //     next(position) {
  //       console.log('Current Position: ', position);
  //     },
  //     error(msg) {
  //       console.log('Error Getting Location: ', msg);
  //     }
  //   });

  //   // Stop listening for location after 10 seconds
  //   setTimeout(() => {
  //     locationsSubscription.unsubscribe();
  //   }, 10000);


  // }

  
  // subscribing simple observable using instance value of array and number 
  simpleObservable() { //method call
    const myObservable = of(this.arr, 2, 3, 4); //creating observable Rxjs Of() library method 

    const myObserver = { //creating observer object with next error and complete method
      next: (x: number) => console.log('Observer got a next Value ' + x),
      error: (err: Error) => console.log("Observer got an Error" + err),
      complete: () => console.log('Observer Got a Complete notification')
    };

    myObservable.subscribe(myObserver); //subscribing observer

    //subscribing observer with call-back function
    myObservable.subscribe(
      x => console.log('Observer calling in callback function: ' + x),
      () => console.log('Complete observer ')
    )
  }

    // we can create observable stream using Observable constructor and return it
  sequenceSubscriber(observer: Observer<number>) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.error('error ocurs here');
    observer.complete();

    return { unsubscribe() { } };

  }

  sequenceSub() {
    const sequence = new Observable(this.sequenceSubscriber);
    sequence.subscribe(
      // next(num){console.log(num)}
      x => console.log(x),
      // err => console.log(err),
      () => console.log('You are Completed')

    );
  }


  // formEvent<T extends keyof HTMLElementEventMap>
  //   (target:HTMLElement, eventName:T){
  //     return new Observable<HTMLElementEventMap[T]>((observer)=>{
  //       const handler =(e:HTMLElementEventMap[T])=> observer.next(e);

  //       target.addEventListener(eventName,handler);
  //       return()=>{
  //         target.removeEventListener(eventName,handler);
  //       };
  //     });
  // }
  //  fromEvent<T extends keyof HTMLElementEventMap>(target: HTMLElement, eventName: T) {
  //   return new Observable<HTMLElementEventMap[T]>((observer) => {
  //     const handler = (e: HTMLElementEventMap[T]) => observer.next(e);
  
  //     // Add the event handler to the target
  //     target.addEventListener(eventName, handler);
  
  //     return () => {
  //       // Detach the event handler from the target
  //       target.removeEventListener(eventName, handler);
  //     };
  //   });
  // }
  //  ESC_KEY=27;
  // nameInput=document.getElementById('name') as HTMLInputElement;

  // subscrition=this.fromEvent(this.nameInput,'keydown').subscribe((e: KeyboardEvent)=>{
  //   if(e.keyCode===this.ESC_KEY){
  //     this.nameInput.value='';
  //   }
  // });



  // test new observable

  myObservableTest=new Observable((observer)=>{
    observer.next('This is First Next Emmit call from NgOninit');
    setTimeout(() => {
      observer.next("This is Timeoout second Call");
      observer.error('Found Error');
      observer.complete();
    }, 3000);
  });

  myObservableTestButton(){
    let test =this.myObservableTest.subscribe(
      data=>console.log(data),
      err=>console.log(err),
      ()=>console.log('Completed Calling observable... Thank You')
    )
    setTimeout(() => {
      test.unsubscribe();
    }, 1000);
  }


}
