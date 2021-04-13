import { Component, OnInit } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-create-webinar',
  templateUrl: './create-webinar.component.html',
  styleUrls: ['./create-webinar.component.scss']
})
export class CreateWebinarComponent implements OnInit {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  endTime = null;
  startTime = null;
  time = null;
  data={};
  imageSrc=""
  selectedFile= null
  fileName = ""

  constructor(
    private calendar: NgbCalendar, 
    public formatter: NgbDateParserFormatter
    ) {}

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.changeStart(this.startTime)
    this.changeEnd(this.endTime)
  }

  changeStart(data){
    if(data){
      var temp1 = dayjs(data).format('hh:mm A')
      var temp2 = null
      if(this.endTime != null){
        temp2 = dayjs(this.endTime).format('hh:mm A')
      }
      this.time = temp1 + ' - ' + temp2
    }
  }

  changeEnd(data){
    if(data){
      var temp2 = dayjs(data).format('hh:mm A')
      var temp1 = null
      if(this.endTime != null){
        temp1 = dayjs(this.startTime).format('hh:mm A')
      }
      this.time = temp1 + ' - ' + temp2
    }
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

  sendData(){
    var temp = dayjs(this.startTime).format('hh:mm A')
    console.log(temp,this.startTime)
  }

}
