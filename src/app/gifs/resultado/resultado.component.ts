import { Component } from '@angular/core';
import { GifsServicesService } from '../servisGifs/gifs-services.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  get mostrar(){
    return this._serv.rest;
  }

  constructor(private _serv: GifsServicesService){
     
  }




}
