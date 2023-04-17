import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { TarjetaGitsComponent } from './tarjeta-gits/tarjeta-gits.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadoComponent,
    TarjetaGitsComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class GifsModule { }
