import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageBeerPage } from './manage-beer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManageBeerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageBeerPage),
    FormsModule
  ],
  entryComponents: [
    ManageBeerPage
  ]
})
export class ManageBeerPageModule {}
