import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKNoStVjlwsaJfQcesSUph0gdNukT9-WE'
    })
  ],entryComponents: [
    SetLocationPage
  ]
})

export class SetLocationPageModule { }
