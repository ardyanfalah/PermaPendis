import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [LoginAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
