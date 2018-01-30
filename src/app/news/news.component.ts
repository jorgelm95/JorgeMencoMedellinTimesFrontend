import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news/news.service';
import {news} from '../Models/news'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewsService]  
})
export class NewsComponent implements OnInit {

  public news:news;
  listNews:any[]
  disableupdate:boolean;
  disablesave:boolean;


  constructor(private newsService:NewsService) {

    this.news = new news("","","", new Date());
    this.disableupdate=true;
    this.disablesave=false;
   }

  ngOnInit() {
  this.getAllNews();  
}

  onsubmit():void{
    //  console.log(this.model);
      //this.evento.DateEvent = new Date(this.date.year,this.date.month);
      //console.log(this.evento.DateEvent);       
    console.log(this);
    this.newsService.saveNews(this.news).subscribe(
      result => { if(result != 200){
                    console.log(result);
                     alert("registro guardado con exito");
                }else{
                    console.log("Gruade");
                }

            },
            error => {
                console.log(<any>error);
            }
    )
  }

  getAllNews():any{
    this.newsService.getAllNews().subscribe(
      result => {
          if(result != null){
            this.listNews = result;
            console.log(result);
          }else{
            
          }
      }
    )
  }
  editNew(item:news):void{
     this.news = item;
    this.disableupdate=false;
    this.disablesave=true;
  }

  updateNews():any{
    this.newsService.updateNews(this.news).subscribe(
      result => {
         if(result == "Actualizado"){
          alert("El registro ha sido actualizado correctamente");
        }else{
          console.log("El registro se actualizo correctamente");
        }
      }
    )
  }

  deleteNews(id:string):any{
    this.newsService.deleteNews(id).subscribe(
      result=>{
          if (result != null) {
          alert("El registro se elimino con exito");          
        }else{
          console.log("surgio un error");
        }
      }
    )
  }

}
