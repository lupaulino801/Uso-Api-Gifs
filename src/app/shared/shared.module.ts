import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImagesNofoundComponent } from './images-nofound/images-nofound.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ImagesNofoundComponent
  ],
  exports: [
    SidebarComponent,
    ImagesNofoundComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
