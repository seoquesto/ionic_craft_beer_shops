import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    IonicPageModule.forChild(StartPage),
  ],
  entryComponents: [StartPage]
})
export class StartPageModule {}
