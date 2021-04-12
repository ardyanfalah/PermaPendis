import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service'
import { MasterdataService } from '../../../../services/masterdata.service'

import { DataService } from '../../../../services/data.service'
import { SweetAlert } from '../../../../utilities/sweetalert'
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-penyelenggara',
  templateUrl: './daftar-penyelenggara.component.html',
  styleUrls: ['./daftar-penyelenggara.component.scss']
})
export class DaftarPenyelenggaraComponent implements OnInit {

  constructor(
    private masterDataService: MasterdataService,
    private accountService:AccountService,
    private dataService:DataService,
    private sweetAlert:SweetAlert,
    private router: Router,
  ) { }

  loading=false;
  itemPenyelenggara=[]

  ngOnInit(): void {
    this.getListPenyelenggara()
  }

  getListPenyelenggara(){
    this.loading = true;
    this.masterDataService.getPenyelenggaraAll().subscribe(
      res=>{
        console.log(res)
        this.loading = false
        if(res.success){
          this.itemPenyelenggara = res.data
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

  deletePenyelenggara(data){
    this.sweetAlert.showConfirm("Konfirmasi", "Anda yakin item terpilih akan dihapus").then(
      result => {
        if(result.isConfirmed){
          if(data != undefined && data != null){
            this.masterDataService.deletePenyelenggara(data["id_penyelenggara"]).subscribe(
              res=>{
                console.log(res)
                this.loading = false
                if(res.success){
                  this.sweetAlert.showSuccess(res.message)
                  this.getListPenyelenggara()
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

  createPenyelenggara(){
    
    this.dataService.dataPenyelenggara = null
    this.router.navigate(['/admin/create-penyelenggara'])
    
  }

  updatePenyelenggara(data){
    if(data != undefined && data != null){
      this.dataService.dataPenyelenggara = data
      this.router.navigate(['/admin/create-penyelenggara'])
    } else {
      this.dataService.dataPenyelenggara = null
      this.router.navigate(['/admin/create-penyelenggara'])
    }
  }
}
