import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServicesService } from '../servisGifs/gifs-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor(private _servGifsPost : GifsServicesService){}

@ViewChild('txtbuscar')  txtbuscar!:ElementRef<HTMLInputElement>;

  buscar(){

    const  busQueda = this.txtbuscar.nativeElement;
 
    this._servGifsPost.addHistorial(busQueda.value);
    busQueda.value = '';


  }

}
