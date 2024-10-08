import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,children:[
      {path: '', component: HomeAdminComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
