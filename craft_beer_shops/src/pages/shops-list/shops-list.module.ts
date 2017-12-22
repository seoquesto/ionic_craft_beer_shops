import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopsListPage } from './shops-list';

@NgModule({
  declarations: [
    ShopsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopsListPage),
  ],
  entryComponents: [
    ShopsListPage
  ]
})
export class ShopsListPageModule {}
