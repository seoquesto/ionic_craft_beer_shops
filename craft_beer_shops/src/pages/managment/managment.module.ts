import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagmentPage } from './managment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagmentPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(ManagmentPage),
  ],
  entryComponents: [
    ManagmentPage
  ]
})
export class ManagmentPageModule { }
