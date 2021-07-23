import { Component, OnInit } from '@angular/core';
import { ImageSliderService } from '../shared/services/image-slider.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor(private slider: ImageSliderService) { }
  //Variable Declaration
  count = 0;
  imageArray:any;
  lengthImage: number;


  addImage = new FormGroup({
    image:new FormControl('',Validators.required),
    caption:new FormControl('')
  });

  ngOnInit() {
    this.slider.getImages().subscribe((result) => {
      console.log(result);
      this.imageArray = result;
      this.lengthImage= this.imageArray.length;
  });
  }
  

  addImageCaptionForm(){
    this.slider.addImagesCaption(this.addImage.value).subscribe((result)=>{
      console.log(result);
      this.addImage.reset();
      this.ngOnInit();
    })
  }
  
    setValue(event: string) {
    let value = parseInt(event);
    this.count = value - 1;

  }
  increaseOne() {
      if(this.count< Object.keys(this.imageArray).length-1){
      this.count += 1;
    } else {
      return false;
    }
  }
  decreaseOne() {
    if (this.count > 0) {
      this.count -= 1;
    } else {
      return false;
    }
  }

  get f(){
    return this.addImage.controls;
  }
  get image(){return this.addImage.get('image');}

}
