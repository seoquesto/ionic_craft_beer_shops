import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagmentPage } from './managment';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    ManagmentPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(ManagmentPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKNoStVjlwsaJfQcesSUph0gdNukT9-WE'
    })
  ],
  entryComponents: [
    ManagmentPage
  ]
})
export class ManagmentPageModule { }
