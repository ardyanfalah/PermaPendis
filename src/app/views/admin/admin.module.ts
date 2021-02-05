import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DaftarAdminComponent } from './daftar-admin/daftar-admin.component';
import { DaftarPesertaComponent } from './daftar-peserta/daftar-peserta.component';
import { DaftarInstrukturComponent } from './daftar-instruktur/daftar-instruktur.component';
import { DaftarPenyelenggaraComponent } from './daftar-penyelenggara/daftar-penyelenggara.component';
import { DaftarTransaksiComponent } from './daftar-transaksi/daftar-transaksi.component';
import { DaftarJadwalComponent } from './daftar-jadwal/daftar-jadwal.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [LoginAdminComponent, DashboardAdminComponent, DaftarAdminComponent, DaftarPesertaComponent, DaftarInstrukturComponent, DaftarPenyelenggaraComponent, DaftarTransaksiComponent, DaftarJadwalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TabsModule
  ]
})
export class AdminModule { }
