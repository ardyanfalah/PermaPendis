import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DaftarAdminComponent } from './daftar-admin/daftar-admin.component';
import { DaftarPesertaComponent } from './daftar-peserta/daftar-peserta.component';
import { DaftarInstrukturComponent } from './daftar-instruktur/daftar-instruktur.component';
import { DaftarPenyelenggaraComponent } from './daftar-penyelenggara/daftar-penyelenggara.component';
import { DaftarTransaksiComponent } from './daftar-transaksi/daftar-transaksi.component';
import { DaftarJadwalComponent } from './daftar-jadwal/daftar-jadwal.component';
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
          title: 'Penyelenggar'
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
