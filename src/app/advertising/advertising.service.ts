import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Advertising} from  '../Models/Advertinsing';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdvertisingService {

  url:string ="https://medellintimes.azurewebsites.net/api/";
  constructor(private http:HttpClient) { 
   
  }

  getAllAdvertising():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
    return this.http.get(this.url+"Advertisings",{headers:headers});
  }

  saveAdvertising(adv:Advertising):Observable<any>{
       let json = JSON.stringify(adv);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.post(this.url+"Advertisings", json,{headers:headers});
  }

  updateAdvertising(advupdate):Observable<any>{
     let json = JSON.stringify(advupdate);
      let params = "json="+json;
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.put(this.url+"Advertisings", json,{headers:headers});
  }

  deleteAdvertising(Id:string):Observable<any>{
    let data = JSON.stringify(Id);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    let url = this.url+"Advertisings/"+Id;;
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.delete(url,{headers:headers});
}

}

