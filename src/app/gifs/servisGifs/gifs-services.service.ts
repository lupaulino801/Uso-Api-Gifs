import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private api_key = "2vnUhZg20d46FDGQ8RZDMFnzAnw3KflO";
  private _hisorial : string [] = [];


  constructor(private http: HttpClient) { }


 

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

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
   

  }

 


  
  

}
