import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {

  constructor() { }

  private _hisorial : string [] = [];

  getHistorial(){
    return [...this._hisorial];
  }

  addHistorial(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._hisorial.includes(query)){
      if(this._hisorial.length < 4){
        this._hisorial.unshift(query);
      }else{
        console.log("Ya gastaste tus limites de add")
      }

    }

  }
  

}
