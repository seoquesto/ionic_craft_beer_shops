import { CityService } from './../services/city.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShopsListPageModule } from '../pages/shops-list/shops-list.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ShopsListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    CityService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  entryComponents :[
    MyApp
  ]
})
export class AppModule {}
