import { Component, OnInit } from '@angular/core';
import {EventService} from '../event/event.service';
import {event} from  '../Models/event';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[EventService]
})
export class EventComponent implements OnInit {

  public evento:event
  eventos:any[];
  now = new Date();
  disableupdate:boolean;
  disableSave:boolean;
  constructor(private eventService:EventService) { 
    this.evento = new event("","","",new Date());
    this.disableSave=false;
    this.disableupdate=true;
  }

  ngOnInit() {
    this.getAllEvents();
  }
  model: NgbDateStruct;
  date: {year: number, month: number,day:number};

    onsubmit():void{
    //  console.log(this.model);
      //this.evento.DateEvent = new Date(this.date.year,this.date.month);
      //console.log(this.evento.DateEvent);
          
    console.log(this.evento);
    this.eventService.saveEvent(this.evento).subscribe(
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

  getAllEvents():any{
    this.eventService.getAllEvents().subscribe(
      result => {
          if(result != null){
            this.eventos = result;
            console.log(result);
          }else{
            
          }
      }
    )
  }
  editEvent(itemEvent:event):void{
    this.evento = itemEvent;
    this.disableSave = true;
    this.disableupdate = false;
  }

  updateEvent():any{
    this.eventService.updateEvent(this.evento).subscribe(
      result => {
        if(result == "Actualizado"){
          alert("El registro ha sido actualizado correctamente");
        }else{
          console.log("El registro se actualizo correctamente");
        }
      }
    )
  }

  deleteEvent(id:string):any{
    this.eventService.deleteEvent(id).subscribe(
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
