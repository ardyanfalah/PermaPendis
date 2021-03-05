import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cari-webinar',
  templateUrl: './cari-webinar.component.html',
  styleUrls: ['./cari-webinar.component.scss']
})
export class CariWebinarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToPayment(){
    this.router.navigateByUrl('/user/pemesanan');

  }
}
