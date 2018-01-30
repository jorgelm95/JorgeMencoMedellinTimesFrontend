import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {news} from  '../Models/news';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewsService {

  url:string ="https://medellintimes.azurewebsites.net/api/";
  public news:news;
  listsNews:any[];

  constructor(private http:HttpClient) { }

  getAllNews():Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
    return this.http.get(this.url+"News",{headers:headers});
  }

  saveNews(newsSave:news):Observable<any>{
       let json = JSON.stringify(newsSave);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.post(this.url+"News", json,{headers:headers});
  }

  updateNews(advupdate:news):Observable<any>{
     let json = JSON.stringify(advupdate);
      let params = "json="+json;
      let headers = new HttpHeaders().set('Content-Type','application/json');
      headers.append('Access-Control-Allow-Origin','*');
     return  this.http.put(this.url+"News", json,{headers:headers});
  }

  deleteNews(Id:string):Observable<any>{
    let data = JSON.stringify(Id);
    let headers = new HttpHeaders().set('Content-Type','application/json')
    let url = this.url+"News/"+Id;
    headers.append('Access-Control-Allow-Origin','*');
    return this.http.delete(url,{headers:headers});
}


}
