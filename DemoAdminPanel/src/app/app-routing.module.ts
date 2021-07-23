import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home' },
  {path:'', component:HomeComponent},
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  {path : 'formbuilder',component:FormbuilderComponent},
  {path: 'image-slider', component:ImageSliderComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
