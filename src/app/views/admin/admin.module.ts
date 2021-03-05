import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DaftarAdminComponent } from './admin/daftar-admin/daftar-admin.component';
import { DaftarPesertaComponent } from './peserta/daftar-peserta/daftar-peserta.component';
import { DaftarInstrukturComponent } from './instruktur/daftar-instruktur/daftar-instruktur.component';
import { DaftarPenyelenggaraComponent } from './penyelenggara/daftar-penyelenggara/daftar-penyelenggara.component';
import { DaftarTransaksiComponent } from './transaksi/daftar-transaksi/daftar-transaksi.component';
import { DaftarJadwalComponent } from './webinar/daftar-jadwal/daftar-jadwal.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { CreatePenyelenggaraComponent } from './penyelenggara/create-penyelenggara/create-penyelenggara.component';

@NgModule({
  declarations: [
    LoginAdminComponent, 
    DashboardAdminComponent, 
    DaftarAdminComponent, 
    DaftarPesertaComponent, 
    DaftarInstrukturComponent, 
    DaftarPenyelenggaraComponent, 
    DaftarTransaksiComponent, 
    DaftarJadwalComponent, 
    CreateAdminComponent, CreatePenyelenggaraComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TabsModule,
    NgxLoadingModule,
    NgxSelectModule
  ]
})
export class AdminModule { }
