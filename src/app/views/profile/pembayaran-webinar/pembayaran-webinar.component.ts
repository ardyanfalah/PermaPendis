import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pembayaran-webinar',
  templateUrl: './pembayaran-webinar.component.html',
  styleUrls: ['./pembayaran-webinar.component.scss']
})
export class PembayaranWebinarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToCari(){
    this.router.navigateByUrl('/user/cari-webinar');

  }
  
}
