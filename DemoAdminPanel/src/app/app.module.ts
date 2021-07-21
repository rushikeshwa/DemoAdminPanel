import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

import { SidebarModule } from 'ng-sidebar';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ListEmpComponent } from './EmployeeKud/list-emp/list-emp.component';
import { CreateEmpComponent } from './EmployeeKud/create-emp/create-emp.component';

const appRoutes:Routes=[
  {path:'list-empkud',component:ListEmpComponent},
  {path:'create-empkud',component:CreateEmpComponent},
  {path:'',redirectTo:'/list-empkud' , pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FormbuilderComponent,
    ListEmpComponent,
    CreateEmpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    SidebarModule.forRoot(),
    NgxPaginationModule,

  ],
  providers: [DatePipe],
  exports: [],
    
  bootstrap: [AppComponent],
  entryComponents: [],

})
export class AppModule { }
