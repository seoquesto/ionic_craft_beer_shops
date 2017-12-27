import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageBeerPage } from './manage-beer';
import { FormsModule } from '@angular/forms';
import { ManagmentService } from '../../services/managment.service';

@NgModule({
  declarations: [
    ManageBeerPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageBeerPage),
    FormsModule
  ],
  providers: [
    ManagmentService
  ],
  entryComponents: [
    ManageBeerPage
  ]
})
export class ManageBeerPageModule {}
