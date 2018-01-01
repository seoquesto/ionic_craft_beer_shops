import { SigninPage } from './../pages/signin/signin';
import { ManagmentPage } from './../pages/managment/managment';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Page } from 'ionic-angular/navigation/nav-util';
import { CitiesPage } from '../pages/cities/cities';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { initializeApp, auth } from 'firebase';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: Page = CitiesPage;
  managePage: Page = ManagmentPage;
  signinPage: Page = SigninPage;
  signupPage: Page = SignupPage;
  isAuth:boolean = true;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuController: MenuController) {
    
    initializeApp({
      apiKey: "AIzaSyCaiVcBBX_s3_eymLcuwpIc1dDuc03JFxY",
      authDomain: "craft-beer-9033d.firebaseapp.com",
      databaseURL: "https://craft-beer-9033d.firebaseio.com",
      projectId: "craft-beer-9033d",
      storageBucket: "craft-beer-9033d.appspot.com",
      messagingSenderId: "299241268802"
    });

    auth().onAuthStateChanged(user=>{
      if(user) {
        this.isAuth = true;
        this.content.setRoot(this.rootPage);
      } else {
        this.isAuth = false;
        this.content.setRoot(this.signinPage);
      }
    });
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: Page): void {
    this.content.setRoot(page);
    this.menuController.close();
  }

  logout(): void {
    
  }
}

