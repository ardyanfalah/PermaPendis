import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beranda-user',
  templateUrl: './beranda-user.component.html',
  styleUrls: ['./beranda-user.component.scss']
})
export class BerandaUserComponent implements OnInit {

  constructor() { }

  daftarWebinarTerlaksana=[
    0,1,2,3
  ]

  ngOnInit(): void {
  }

}
