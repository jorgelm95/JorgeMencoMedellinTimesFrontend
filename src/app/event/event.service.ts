import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {event} from  '../Models/event';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {

  url:string ="https://medellintimes.azurewebsites.net/api/";
  constructor(private http:HttpClient) { 
    
  }

  getAllEvents():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
    return this.http.get(this.url+"Events",{headers:headers});
  }

  saveEvent(evenSave:event):Observable<any>{
       let json = JSON.stringify(evenSave);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.post(this.url+"Events", json,{headers:headers});
  }

  updateEvent(advupdate:event):Observable<any>{
     let json = JSON.stringify(advupdate);
      let params = "json="+json;
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.put(this.url+"Events", json,{headers:headers});
  }

  deleteEvent(Id:string):Observable<any>{
    let data = JSON.stringify(Id);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    let url = this.url+"Events/"+Id;
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.delete(url,{headers:headers});
}


}
