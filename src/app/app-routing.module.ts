import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutingSampleComponent} from '../app/routing-sample/routing-sample.component'
import {AdminRoutingSampleComponent} from '../app/admin-routing-sample/admin-routing-sample.component'
const routes: Routes = [
  {
    path:'routing-sample',
    component:RoutingSampleComponent
  },
  {
    path:'admin',
    component:AdminRoutingSampleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }