import { CallNumber } from '@ionic-native/call-number';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopInfoPage } from './shop-info';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ShopInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopInfoPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKNoStVjlwsaJfQcesSUph0gdNukT9-WE'
    })
  ],
  entryComponents: [
    ShopInfoPage
  ],
  providers: [
    CallNumber
  ]
})

export class ShopInfoPageModule { }
