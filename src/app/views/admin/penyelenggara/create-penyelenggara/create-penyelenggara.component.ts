import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service'
import { DataService } from '../../../../services/data.service'
import { Router,ActivatedRoute } from '@angular/router';
import { SweetAlert } from '../../../../utilities/sweetalert'

@Component({
  selector: 'app-create-penyelenggara',
  templateUrl: './create-penyelenggara.component.html',
  styleUrls: ['./create-penyelenggara.component.scss']
})
export class CreatePenyelenggaraComponent implements OnInit {

  constructor(
    private accountService:AccountService,
    private dataService:DataService,
    private router: Router,
    private sweetAlert:SweetAlert,
  ) { }

  loading = false
  isEdit = false

  dataPenyelenggara={
      id_penyelenggara: null,
      email_penyelenggara : null,
      nama_penyelenggara : null,
      password_penyelenggara : null,
      status_penyelenggara : null,
      hp_penyelenggara : null,
      gambar_penyelenggara : null,
      status : null,
  }

  ngOnInit(): void {
  }

  sendData(){
    console.log(this.dataPenyelenggara)
    
  }

  goBack(){
    this.router.navigate(['/admin/daftar-penyelenggara'])
  }

}
