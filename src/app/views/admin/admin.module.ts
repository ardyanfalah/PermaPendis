import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { NgxSelectModule } from 'ngx-select-ex';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DaftarAdminComponent } from './admin/daftar-admin/daftar-admin.component';
import { DaftarPesertaComponent } from './peserta/daftar-peserta/daftar-peserta.component';
import { DaftarInstrukturComponent } from './instruktur/daftar-instruktur/daftar-instruktur.component';
import { DaftarPenyelenggaraComponent } from './penyelenggara/daftar-penyelenggara/daftar-penyelenggara.component';
import { DaftarTransaksiComponent } from './transaksi/daftar-transaksi/daftar-transaksi.component';
import { DaftarJadwalComponent } from './webinar/daftar-jadwal/daftar-jadwal.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { CreatePenyelenggaraComponent } from './penyelenggara/create-penyelenggara/create-penyelenggara.component';
import { CreateWebinarComponent } from './webinar/create-webinar/create-webinar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    CreateAdminComponent, CreatePenyelenggaraComponent, CreateWebinarComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TabsModule,
    NgxLoadingModule,
    NgxSelectModule,
    CKEditorModule,
    BsDatepickerModule,
    TimepickerModule
  ]
})
export class AdminModule { }
