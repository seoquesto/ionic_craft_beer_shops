import { DisplayService } from './../services/display.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShopsListPageModule } from '../pages/shops-list/shops-list.module';
import { CitiesPageModule } from '../pages/cities/cities.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ShopsListPageModule,
    CitiesPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DisplayService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  entryComponents: [
    MyApp
  ]
})

export class AppModule { }
