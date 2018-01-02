import { User } from './../models/user.model';
import { AuthService } from './../services/auth.service';
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

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuController: MenuController,
    private authService: AuthService) {
    
    initializeApp({
      apiKey: "AIzaSyCaiVcBBX_s3_eymLcuwpIc1dDuc03JFxY",
      authDomain: "craft-beer-9033d.firebaseapp.com",
      databaseURL: "https://craft-beer-9033d.firebaseio.com",
      projectId: "craft-beer-9033d",
      storageBucket: "craft-beer-9033d.appspot.com",
      messagingSenderId: "299241268802"
    });

    auth().onAuthStateChanged(user=>{
      //should be to select during signup
      let photoToRemove = `https://www.shareicon.net/data/128x128/2015/09/18/103160_man_512x512.png`;
      //
      if(user) {
        this.isAuth = this.authService.IS_AUTH = true;
        this.authService.USER_ = new User(user.email, photoToRemove);
        this.rootPage = CitiesPage;
      } else {
        this.isAuth = this.authService.IS_AUTH = false;
        this.authService.USER_ = null;
        this.rootPage = SigninPage;
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
    this.authService.logout();
    this.menuController.close();
    this.content.setRoot(SigninPage);
  }
}

