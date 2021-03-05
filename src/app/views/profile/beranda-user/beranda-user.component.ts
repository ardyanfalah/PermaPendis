import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beranda-user',
  templateUrl: './beranda-user.component.html',
  styleUrls: ['./beranda-user.component.scss']
})
export class BerandaUserComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }

  daftarWebinarTerlaksana=[
    0,1,2,3
  ]

  ngOnInit(): void {
  }

  goToDetail(){
    this.router.navigateByUrl('/user/info-webinar');
  }

}
