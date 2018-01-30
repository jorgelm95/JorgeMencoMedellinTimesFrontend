import { Component, OnInit } from '@angular/core';
import {AdvertisingService} from '../advertising/advertising.service';
import {Advertising} from  '../Models/Advertinsing';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css'],
  providers:[AdvertisingService]
})
export class AdvertisingComponent implements OnInit {
   public adv:Advertising;
   disableupdate:boolean;
   disablesave:boolean;
   Advertisings:any[]; 
  constructor(private adService:AdvertisingService) { 
    this.disableupdate=true;
    this.disablesave=false;
     this.adv = new Advertising('','','',new Date())
  
}

  ngOnInit() {
    
   this.getAllAdvertising();
  }

  onsubmit():void{
    console.log(this.adv);
    this.adService.saveAdvertising(this.adv).subscribe(
      result => { if(result != null){
                    alert("registro guardado con exito");
                }else{
                    console.log("Gruade") 
                }
            },
            error => {
                console.log(<any>error);
            }
    )
  }

  getAllAdvertising():any{
    this.adService.getAllAdvertising().subscribe(
      result => {
          if(result != null){
            this.Advertisings = result;
            console.log(result);
          }else{
            console.log("no se encontraron registros");
          }
      }
    )
  }
  editAdvertising(item:Advertising):void{
    this.adv = item;
    this.disableupdate=false;
    this.disablesave=true;
  }

  updateAdvertising():any{
    let advertisingUpdate = this.adv;
    this.adService.updateAdvertising(advertisingUpdate).subscribe(
      result => {
        if(result == "Actualizado"){
          alert("El registro ha sido actualizado correctamente");
        }else{
          console.log("El registro se actualizo correctamente");
        }
      }
    )
    this.disablesave=false;
    this.disableupdate=true;
    this.clearCamposForm();
  }

  deleteAdvertising(id:string):any{
    this.adService.deleteAdvertising(id).subscribe(
      result=>{
        if (result != null) {
          alert("El registro se elimino con exito");          
        }else{
          console.log("surgio un error");
        }
      }
    )
  }
  clearCamposForm():void{
    this.adv.Title="";
    this.adv.Descriotion="";
    this.adv.PathImage="";
    this.adv.DateCreation = null;
  }

}
