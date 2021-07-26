import { Component, OnInit } from '@angular/core';
import { ImageSliderService } from '../shared/services/image-slider.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Routes, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  constructor(private router:Router, private slider: ImageSliderService) { }
  //Variable Declaration
  count = 0;
  imageArray: any;
  lengthImage: number;
  // update and add form toggle
  addForm: boolean;
  updateForm: boolean;
  updateImageID: number;
  alert:boolean=false;

  //Add New Image into slider  form
  addImage = new FormGroup({
    image: new FormControl('', Validators.required),
    caption: new FormControl('')
  });

  // Update Image into slider form enable on click of update button
  updateImage = new FormGroup({
    image: new FormControl(''),
    caption: new FormControl('')
  })

  ngOnInit() {
   this.test();
  }

  test(){
     //fetch all images form server get API
     this.slider.getImages().subscribe((result) => {
      console.log(result);
      this.imageArray = result;
      this.lengthImage = this.imageArray.length;
    });
    this.addForm = true;
   
  }

  //Put API to Update Image and caption
  editImage(id) {
    this.slider.getCurrentImages(id).subscribe((result)=>{
      console.log(result);
      this.updateImage=new FormGroup({
        
    image: new FormControl(result['image']),
    caption: new FormControl(result['caption'])
      });
    });
    console.log(id);
    this.updateImageID = id;
    this.updateForm = true;
    this.addForm = false;
    this.alert=true;
  }
//  send Data to server for update image data
updateImageCaptionForm(){
  this.slider.updateImage(this.updateImageID,this.updateImage.value).subscribe((result)=>{
    console.log(result);
  });
  this.updateImage.reset();
  this.test();
  // window.location.reload()
 
  this.updateForm=false;
}

  // post API for Add new Images
  addImageCaptionForm() {
    this.slider.addImagesCaption(this.addImage.value).subscribe((result) => {
      // console.log(result);
      this.addImage.reset();
      this.ngOnInit();
    });
    this.alert=true;
  }

  // Delete API to delete Image and caption
  deleteImage(id) {
    this.slider.deleteImage(id).subscribe((result) => {
      // console.log(result);
    });

    // this.ngOnInit();
    this.test();
    this.alert=true;
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }


  // seting value to count variable for increment and decrement
  setValue(event: string) {
    let value = parseInt(event);
    this.count = value - 1;
  }

  // go to next image and increment a count variable
  increaseOne() {
    if (this.count < Object.keys(this.imageArray).length - 1) {
      this.count += 1;
    } else {
      return false;
    }
  }
  // go to previous image and decrement a count variable
  decreaseOne() {
    if (this.count > 0) {
      this.count -= 1;
    } else {
      return false;
    }
  }

  // validation for Image Path Field
  get f() {
    return this.addImage.controls;
  }
  get image() { return this.addImage.get('image'); }

}
