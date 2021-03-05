import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  pdfUrl = "assets/doc/SK Pengukuhan Perma Pendis 2019.pdf"

  ngOnInit(): void {
  }

}
