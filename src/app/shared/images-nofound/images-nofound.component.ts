import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-nofound',
  templateUrl: './images-nofound.component.html',
  styleUrls: ['./images-nofound.component.css']
})
export class ImagesNofoundComponent {

imagesload = false;
@Input() xt:any;



onLoad(){
  this.imagesload = true
}

}
