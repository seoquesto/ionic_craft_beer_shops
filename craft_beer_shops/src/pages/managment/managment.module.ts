import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagmentPage } from './managment';

@NgModule({
  declarations: [
    ManagmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagmentPage),
  ],
  entryComponents: [
    ManagmentPage
  ]
})
export class ManagmentPageModule { }
