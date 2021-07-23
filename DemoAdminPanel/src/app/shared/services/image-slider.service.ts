import { Injectable } from '@angular/core';
import { MainURL } from '../constant/configUrl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageSliderService {
  url=MainURL.sliderUrl;
  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get(this.url);
  }
  getCurrentImages(id){
    return this.http.get(`${this.url}/${id}`);
  }
  addImagesCaption(data){
    return this.http.post(this.url,data);
  }
}
