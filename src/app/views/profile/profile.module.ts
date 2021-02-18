import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { BerandaUserComponent } from './beranda-user/beranda-user.component';
import { CariWebinarComponent } from './cari-webinar/cari-webinar.component';
import { DetailWebinarComponent } from './detail-webinar/detail-webinar.component';
import { PembayaranWebinarComponent } from './pembayaran-webinar/pembayaran-webinar.component';


@NgModule({
  declarations: [
    BerandaUserComponent,
    CariWebinarComponent,
    DetailWebinarComponent,
    PembayaranWebinarComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
