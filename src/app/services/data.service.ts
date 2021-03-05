import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataAdmin={}
  dataPeserta={}
  dataInstruktur={}
  dataPenyelenggara={}
  
  constructor() { }
}
