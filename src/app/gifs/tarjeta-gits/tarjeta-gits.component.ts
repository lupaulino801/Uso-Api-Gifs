import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-gits',
  templateUrl: './tarjeta-gits.component.html',
  styleUrls: ['./tarjeta-gits.component.css']
})
export class TarjetaGitsComponent {

  @Input()  public xt : any;
}
