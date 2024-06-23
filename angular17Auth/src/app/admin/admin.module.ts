import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
