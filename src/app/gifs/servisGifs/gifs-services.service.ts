import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {

  constructor() { }

  private _hisorial : string [] = [];

  getHistorial(){
    return this._hisorial;
  }

  addHistorial(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._hisorial.includes(query)){
      this._hisorial.unshift(query);
      console.log(this._hisorial);
    }

  }
  

}
