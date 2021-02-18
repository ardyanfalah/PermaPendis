import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { AboutComponent } from './about/about.component';
import { KontakComponent } from './kontak/kontak.component';
import { PenyelenggaraComponent } from './penyelenggara/penyelenggara.component';
import { WebinarComponent } from './webinar/webinar.component';

const routes: Routes = [
  {
    path: '',
    data: {
    },
    children: [
      {
        path: 'beranda',
        component: BerandaComponent,
        data: {
          title: 'Beranda'
        }
      },
      {
        path: 'tentang-kami',
        component: AboutComponent,
        data: {
          title: 'Tentang Kami'
        }
      },
      {
        path: 'webinar',
        component: WebinarComponent,
        data: {
          title: 'Webinar'
        }
      },
      {
        path: 'penyelenggara',
        component: PenyelenggaraComponent,
        data: {
          title: 'Penyelenggara'
        }
      },
      {
        path: 'kontak',
        component: KontakComponent,
        data: {
          title: 'Kontak'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
