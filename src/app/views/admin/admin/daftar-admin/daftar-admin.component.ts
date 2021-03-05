import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service'
import { DataService } from '../../../../services/data.service'
import { SweetAlert } from '../../../../utilities/sweetalert'
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-admin',
  templateUrl: './daftar-admin.component.html',
  styleUrls: ['./daftar-admin.component.scss']
})
export class DaftarAdminComponent implements OnInit {

  constructor(
    private accountService:AccountService,
    private dataService:DataService,
    private sweetAlert:SweetAlert,
    private router: Router,
  ) { }

  loading=false;
  itemAdmin=[]

  ngOnInit(): void {

    this.getListAdmin()
  }

  getListAdmin(){
    this.loading = true;
    this.accountService.getAdminAll().subscribe(
      res=>{
        console.log(res)
        this.loading = false
        if(res.success){
          this.itemAdmin = res.data
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

  getRole(roleNum){
    if(roleNum == 0){
      return "Super Admin"
    } else {
      return "Admin"
    }
  }

  deleteAdmin(data){
    this.sweetAlert.showConfirm("Konfirmasi", "Anda yakin item terpilih akan dihapus").then(
      result => {
        if(result.isConfirmed){
          if(data != undefined && data != null){
            this.accountService.deleteAdmin(data["id_admin"]).subscribe(
              res=>{
                console.log(res)
                this.loading = false
                if(res.success){
                  this.sweetAlert.showSuccess(res.message)
                  this.getListAdmin()
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
           this.sweetAlert.showError("Data yang dipilih tidak bisa dihapus")
          }
        }
      }
    )
    
  }

  createAdmin(data){
    if(data != undefined && data != null){
      this.dataService.dataAdmin = data
      this.router.navigate(['/admin/create-admin'])
    } else {
      this.router.navigate(['/admin/create-admin'])
    }
  }

  isSuperAdmin(role){
    if(role == 0)
      return true
    else
      return false 
  }

}
