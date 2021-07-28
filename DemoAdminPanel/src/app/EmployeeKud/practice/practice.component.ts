import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css','./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }
   arr:number[]=[5,1,3,2,6];
  ngOnInit() {
    console.log(this.arr);
    // console.log(this.map);
    // console.log(this.filter);
    // console.log(findSum());
    // console.log(this.reduce);
    console.log(this.reduceFindMax);
    this.findSum();
    this.findMax();
  }
  map=this.arr.map((x)=>{
    return x.toString(2);
  });

  filter=this.arr.filter((x)=>{
    // return x%2;
    // return x%2==0;
    // return x >4;
    return x < 4;
  });

  findSum(){
    let sum=0;
    for(let i=0; i<this.arr.length;i++){
      sum=sum+this.arr[i];
    }
    // return sum;
    // console.log(sum);
  }
  findMax(){
    let sum=0;
    for(let i=0; i<this.arr.length;i++){
      if(this.arr[i]>sum){
        sum=this.arr[i];
      }
    }
    // console.log(sum);
  }
  reduce=this.arr.reduce((acc,curr)=>{
    acc=acc+ curr;
    return acc;
  })
  
  reduceFindMax=this.arr.reduce((acc,curr)=>{
    if(acc<curr){
      acc=curr;
    }
    return acc;
  });
}
