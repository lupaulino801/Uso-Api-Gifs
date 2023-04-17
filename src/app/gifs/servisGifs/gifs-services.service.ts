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

  constructor(private http: HttpClient) {
    this._hisorial = JSON.parse(localStorage.getItem('hitorial_busqueda') || '[]');
    this.rest =  JSON.parse(localStorage.getItem('resultado_busqueda') || '[]');
   }

  getHistorial(){
    return [...this._hisorial];
  }

  addHistorial(query:string){

    query = query.trim().toLocaleLowerCase();

    if(!this._hisorial.includes(query)){   // verificamos si existe el arreglo
   // esto limita hasta 4 el registro
      this._hisorial.unshift(query);    // agregarmos al principio del arreglo con unshift
      this._hisorial = this._hisorial.splice(0,10);
      localStorage.setItem('hitorial_busqueda', JSON.stringify(this._hisorial));

   }

    const parametro = {
      params : new HttpParams()
      .set('api_key', this.api_key)
      .set('q', query)
      .set('limit', '5')
      .set('offset', '0')
      .set('rating', 'g')
      .set('lang', 'en')
    }

    this.http.get(`${this.url}`, parametro)
          .subscribe((resp:any)=>{
             this.rest = resp.data;
             localStorage.setItem('resultado_busqueda', JSON.stringify(this.rest));
    })


  }







}
