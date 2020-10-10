import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';


export interface ResDataInter {
  name:string,
  pop:string
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  isActive:boolean = false;

  isActiveEmitter = new EventEmitter<boolean>();

  loginSuccess() {
      this.isActive = true;
      this.isActiveEmitter.emit(this.isActive);
  }

  getCountries() {
   return this.http.get<ResDataInter>("https://restcountries.eu/rest/v2/all")
  }

  constructor(private http: HttpClient) { }
}
