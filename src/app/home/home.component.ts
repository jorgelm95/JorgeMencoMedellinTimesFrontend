import { Component, OnInit } from '@angular/core';
import {AdvertisingService} from '../advertising/advertising.service';
import {EventService} from '../event/event.service';
import {NewsService} from '../news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any[]
  advertisings:any[]
  newsList:any[]
  constructor(private eventservice:EventService,
   private advertisingService:AdvertisingService,
   private newsService:NewsService) { }

  ngOnInit() {
    this.getEvents();
    this.getAdvertisings();
    this.getNews();
  }


  getEvents():any{
    this.advertisingService.getAllAdvertising().subscribe(
      result => {
          if(result != null){
            this.advertisings = result;
            console.log(result);
          }else{
            
          }
      }
    )
  }

  getNews():any{
    this.newsService.getAllNews().subscribe(
      result => {
          if(result != null){
            this.newsList = result;
            console.log(result);
          }else{
            
          }
      }
    )
  }

  getAdvertisings(): any{
     this.eventservice.getAllEvents().subscribe(
      result => {
          if(result != null){
            this.events = result;
            console.log(result);
          }else{
            
          }
      }
    )
  }
}
