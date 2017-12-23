import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeerInfoPage } from './beer-info';

@NgModule({
  declarations: [
    BeerInfoPage
  ],
  imports: [
    IonicPageModule.forChild(BeerInfoPage),
  ],
  entryComponents: [
    BeerInfoPage
  ]
})
export class BeerInfoPageModule {}
