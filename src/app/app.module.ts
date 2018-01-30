import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';

// services

import {EventService} from './event/event.service'
import {  NewsService} from './news/news.service';
import {AdvertisingService} from './advertising/advertising.service';
import { HomeComponent } from './home/home.component'


const appRoutes: Routes = [
  { path: 'advertising', component: AdvertisingComponent },
  { path: 'event',      component:EventComponent },
  {path: 'news', component: NewsComponent},
  {path:'Inicio', component:AppComponent},
  {path:'Home',component:HomeComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdvertisingComponent,
    EventComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [EventService,NewsService,AdvertisingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
