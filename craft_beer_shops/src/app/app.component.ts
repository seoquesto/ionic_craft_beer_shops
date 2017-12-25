import { ManagmentPage } from './../pages/managment/managment';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CitiesPage } from '../pages/cities/cities';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: Page = CitiesPage;
  managePage: Page = ManagmentPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuController: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: Page): void {
    this.content.setRoot(page);
    this.menuController.close();
  }
}

