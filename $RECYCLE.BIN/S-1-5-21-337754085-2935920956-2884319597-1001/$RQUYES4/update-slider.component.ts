import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSliderService } from 'src/app/shared/services/image-slider.service';
@Component({
  selector: 'app-update-slider',
  templateUrl: './update-slider.component.html',
  styleUrls: ['./update-slider.component.css']
})
export class UpdateSliderComponent implements OnInit {

  constructor(private img:ImageSliderService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.route.snapshot.params.id);
    this.img.getCurrentImages(this.route.snapshot.params.id).subscribe((result)=>{
      console.log(result);
    });
  }

}
