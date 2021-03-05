import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service'
import { DataService } from '../../../../services/data.service'
import { Router,ActivatedRoute } from '@angular/router';
import { SweetAlert } from '../../../../utilities/sweetalert'

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {

  constructor(
    private accountService:AccountService,
    private dataService:DataService,
    private router: Router,
    private sweetAlert:SweetAlert,
  ) { }

  loading = false
  isEdit = false
  itemRole=[
    {
      text: "Super Admin",
      value: 0
    }, {
      text: "Admin",
      value: 1
    }
  ]

  dataAdmin={
    id_admin:null,
    email_admin : null,
    nama_admin : null,
    role_admin : null,
    password_admin : null
  }

  ngOnInit(): void {
    var tempAdmin = this.dataService.dataAdmin
    if(tempAdmin['id_admin'] != undefined && tempAdmin['id_admin'] != null){
      this.isEdit = true
      this.dataAdmin.id_admin = tempAdmin['id_admin']
      this.dataAdmin.email_admin = tempAdmin['email_admin']
      this.dataAdmin.nama_admin = tempAdmin['nama_admin']
      this.dataAdmin.role_admin = tempAdmin['role_admin']
      this.dataAdmin.password_admin = tempAdmin['password_admin']
    }
    console.log(this.isEdit)
  }

  sendData(){
    console.log(this.dataAdmin)
    this.loading = true;
    if(!this.isEdit){
      this.accountService.postAdmin(this.dataAdmin).subscribe(
        res=>{
          console.log(res)
          this.loading = false
          if(res.success){
            this.sweetAlert.showSuccess(res.message)
          } else {
            this.sweetAlert.showError(res.message)
          }
        }, err=>{
          console.log("err : " + JSON.stringify(err))
          this.loading=false;
          this.sweetAlert.showError(err.status+" "+err.statusText)
        }
      )
    } else {
      this.accountService.updateAdmin(this.dataAdmin.id_admin,this.dataAdmin).subscribe(
        res=>{
          console.log(res)
          this.loading = false
          if(res.success){
            this.sweetAlert.showSuccess(res.message)
          } else {
            this.sweetAlert.showError(res.message)
          }
        }, err=>{
          console.log("err : " + JSON.stringify(err))
          this.loading=false;
          this.sweetAlert.showError(err.status+" "+err.statusText)
        }
      )
    }
  }

  goBack(){
    this.router.navigate(['/admin/daftar-admin'])
  }

}
