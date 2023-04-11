import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from 'src/app/gifs/servisGifs/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _gifsService : GifsServicesService ){  }
  
  get historial(){
    return this._gifsService.getHistorial();
   }

   buscar(i:any){
      this._gifsService.addHistorial(i);
   }






  










}
