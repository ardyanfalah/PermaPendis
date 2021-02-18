import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { BerandaComponent } from './beranda/beranda.component';
import { AboutComponent } from './about/about.component';
import { KontakComponent } from './kontak/kontak.component';
import { PenyelenggaraComponent } from './penyelenggara/penyelenggara.component';
import { WebinarComponent } from './webinar/webinar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    BerandaComponent,
    AboutComponent,
    KontakComponent,
    PenyelenggaraComponent,
    WebinarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
