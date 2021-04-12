import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { DaftarAdminComponent } from './admin/daftar-admin/daftar-admin.component';
import { DaftarPesertaComponent } from './peserta/daftar-peserta/daftar-peserta.component';
import { DaftarInstrukturComponent } from './instruktur/daftar-instruktur/daftar-instruktur.component';
import { DaftarPenyelenggaraComponent } from './penyelenggara/daftar-penyelenggara/daftar-penyelenggara.component';
import { CreatePenyelenggaraComponent } from './penyelenggara/create-penyelenggara/create-penyelenggara.component';

import { DaftarTransaksiComponent } from './transaksi/daftar-transaksi/daftar-transaksi.component';
import { DaftarJadwalComponent } from './webinar/daftar-jadwal/daftar-jadwal.component';
import { CreateWebinarComponent } from './webinar/create-webinar/create-webinar.component';


const routes: Routes = [
  {
    path: '',
    data: {
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardAdminComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'daftar-admin',
        component: DaftarAdminComponent,
        data: {
          title: 'Admin'
        }
      },
      {
        path: 'create-admin',
        component: CreateAdminComponent,
        data: {
          title: 'Admin'
        }
      },
      {
        path: 'daftar-peserta',
        component: DaftarPesertaComponent,
        data: {
          title: 'Peserta'
        }
      },
      {
        path: 'daftar-instruktur',
        component: DaftarInstrukturComponent,
        data: {
          title: 'Instruktur'
        }
      },
      {
        path: 'daftar-penyelenggara',
        component: DaftarPenyelenggaraComponent,
        data: {
          title: 'Penyelenggara'
        }
      },
      {
        path: 'create-penyelenggara',
        component: CreatePenyelenggaraComponent,
        data: {
          title: 'Buat Penyelenggara'
        }
      },
      {
        path: 'daftar-jadwal',
        component: DaftarJadwalComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'create-webinar',
        component: CreateWebinarComponent,
        data: {
          title: 'Buat Webinar'
        }
      },
      {
        path: 'daftar-transaksi',
        component: DaftarTransaksiComponent,
        data: {
          title: 'Transaksi'
        }
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
