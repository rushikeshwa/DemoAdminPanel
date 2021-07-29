import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { TestObservableComponent } from './test-observable/test-observable.component';


const routes: Routes = [
  {path:'observables', component:ObservablesComponent},
  {path:'test', component:TestObservableComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableModuleRoutingModule { }
