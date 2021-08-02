import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ObservableModuleRoutingModule } from './observable-module-routing.module';


import { TestObservableComponent } from './test-observable/test-observable.component';
import { ObservablesComponent } from './observables/observables.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    TestObservableComponent,
    ObservablesComponent,
    LocationComponent,

  ],
  imports: [
    CommonModule,
    ObservableModuleRoutingModule,
    AngularMaterialModule
  ]
})
export class ObservableModuleModule { }
