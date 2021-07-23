import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';


const MaterialComponents=[
  MatButtonModule,
  MatIconModule
]

@NgModule({
  exports:[ MaterialComponents],
  imports: [ MaterialComponents]
})
export class AngularMaterialModule { }
