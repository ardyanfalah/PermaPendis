import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service'
import { DataService } from '../../../../services/data.service'
import { Router,ActivatedRoute } from '@angular/router';
import { SweetAlert } from '../../../../utilities/sweetalert'
import { MasterdataService } from '../../../../services/masterdata.service'

@Component({
  selector: 'app-create-penyelenggara',
  templateUrl: './create-penyelenggara.component.html',
  styleUrls: ['./create-penyelenggara.component.scss']
})
export class CreatePenyelenggaraComponent implements OnInit {

  constructor(
    private masterDataService: MasterdataService,
    private accountService:AccountService,
    private dataService:DataService,
    private router: Router,
    private sweetAlert:SweetAlert,
  ) { }

  loading = false
  isEdit = false
  imageSrc=""
  selectedFile= null
  fileName = ""
  itemStatus=[
    {
      text:'active',
      value: 'active'
    },
    {
      text:'inactive',
      value: 'inactive'
    },
  ]

  dataPenyelenggara={
      id_penyelenggara: null,
      email_penyelenggara : null,
      nama_penyelenggara : null,
      hp_penyelenggara : null,
      gambar_penyelenggara : null,
      status : null,
  }

  ngOnInit(): void {
    var tempAdmin = this.dataService.dataPenyelenggara
    if(tempAdmin!={}){
      if(tempAdmin['id_penyelenggara'] != undefined && tempAdmin['id_penyelenggara'] != null){
        this.isEdit = true
        this.dataPenyelenggara.id_penyelenggara = tempAdmin['id_penyelenggara']
        this.dataPenyelenggara.email_penyelenggara = tempAdmin['email_penyelenggara']
        this.dataPenyelenggara.nama_penyelenggara = tempAdmin['nama_penyelenggara']
        this.dataPenyelenggara.hp_penyelenggara = tempAdmin['hp_penyelenggara']
        this.dataPenyelenggara.status = tempAdmin['status']
        this.dataPenyelenggara.gambar_penyelenggara = tempAdmin['gambar_penyelenggara']
        // console.log(this.masterDataService.getImageUrl()+ this.dataPenyelenggara.gambar_penyelenggara)
        this.imageSrc = this.masterDataService.getImageUrl()+ this.dataPenyelenggara.gambar_penyelenggara
      }
    }
    console.log(this.isEdit)
  }

  sendData(){
    var formData = new FormData()
    formData.append('image', this.selectedFile );
    formData.append('data', JSON.stringify(this.dataPenyelenggara));
    this.loading = true;
    if(!this.isEdit){
      this.masterDataService.createPenyelenggara(formData).subscribe(
        res=>{
          console.log(res)
          this.loading = false
          if(res.success){
            this.sweetAlert.showSuccess(res.message)
            this.router.navigate(['/admin/daftar-penyelenggara'])
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
      this.masterDataService.updatePenyelenggara(formData).subscribe(
        res=>{
          this.loading = false;
          if(res.success){
            this.sweetAlert.showSuccess(res.message)
            this.router.navigate(['/admin/daftar-penyelenggara'])
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
    this.router.navigate(['/admin/daftar-penyelenggara'])
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
