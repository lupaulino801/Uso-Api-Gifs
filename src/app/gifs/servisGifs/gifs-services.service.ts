import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private url = "https://api.giphy.com/v1/gifs/search"
  private api_key = "2vnUhZg20d46FDGQ8RZDMFnzAnw3KflO";
  private _hisorial : string [] = [];
  public rest:any  [] = [];

  constructor(private http: HttpClient) { }


 

  getHistorial(){
    return [...this._hisorial];
  }

  addHistorial(query:string){

    query = query.trim().toLocaleLowerCase();   // eliminamos los espacion con trim y pasamos a minutclas coon toLocaleLowerCase

    if(!this._hisorial.includes(query)){   // verificamos si existe el arreglo
      if(this._hisorial.length < 4){    // esto limita hasta 4 el registro
      this._hisorial.unshift(query);    // agregarmos al principio del arreglo con unshift
      }else{
        console.log("Ya gastaste tus limites de add")   // si pasa el registro de 4 da este mensaje
      }

    }

    const parametro = {     // forma de como pasarle parametros a una ruta   
      params : new HttpParams()
      .set('api_key', this.api_key)
      .set('q', query)
      .set('limit', '20')
      .set('offset', '0')
      .set('rating', 'g')
      .set('lang', 'en')
    }

    // const HttpOt = {    // da error de cord
    //   headers : new HttpHeaders({
    //     'api_key': this.api_key,
    //     'q': query,
    //     'limit': '10',
    //     'offset': '0',
    //     'rating': 'g',
    //     'lang': 'en'
  
    //   })
  
    // } 
    this.http.get(`${this.url}`, parametro)
          .subscribe((resp:any)=>{
             this.rest = resp.data;
             console.log(this.rest);
          })
   

  }

 


  
  

}
