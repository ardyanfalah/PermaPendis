import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
    },
    children: [
      {
        path: 'test/login',
        component: LoginAdminComponent,
        data: {
          title: 'Login Admin'
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
