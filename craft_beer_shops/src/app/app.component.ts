import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ShopsListPage } from '../pages/shops-list/shops-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:Page = ShopsListPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

