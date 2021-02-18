import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaUserComponent } from './beranda-user/beranda-user.component';
import { CariWebinarComponent } from './cari-webinar/cari-webinar.component';
import { DetailWebinarComponent } from './detail-webinar/detail-webinar.component';
import { PembayaranWebinarComponent } from './pembayaran-webinar/pembayaran-webinar.component';

const routes: Routes = [
  {
    path: '',
    data: {
    },
    children: [
      {
        path: 'beranda',
        component: BerandaUserComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'cari-webinar',
        component: CariWebinarComponent,
        data: {
          title: 'Cari Webinar'
        }
      },
      {
        path: 'info-webinar',
        component: DetailWebinarComponent,
        data: {
          title: 'Info Webinar'
        }
      },
      {
        path: 'pemesanan',
        component: PembayaranWebinarComponent,
        data: {
          title: 'Pemesanan tiket'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
