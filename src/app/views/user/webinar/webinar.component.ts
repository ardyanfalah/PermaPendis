import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.scss']
})
export class WebinarComponent implements OnInit {

  constructor() { }

  daftarWebinarTerlaksana=[
    0,1,2,3,4,5,6,7,8,9,10
  ]
  ngOnInit(): void {
  }

}
