import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeersListPage } from './beers-list';

@NgModule({
  declarations: [
    BeersListPage,
  ],
  imports: [
    IonicPageModule.forChild(BeersListPage),
  ],
  entryComponents: [
    BeersListPage
  ]
})

export class BeersListPageModule { }
