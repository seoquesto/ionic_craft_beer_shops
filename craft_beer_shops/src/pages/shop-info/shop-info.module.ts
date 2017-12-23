import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopInfoPage } from './shop-info';

@NgModule({
  declarations: [
    ShopInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopInfoPage),
  ],
  entryComponents: [
    ShopInfoPage
  ]
})
export class ShopInfoPageModule {}
