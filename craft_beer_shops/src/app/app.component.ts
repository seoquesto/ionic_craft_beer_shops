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
import { SignupPage } from '../pages/signup/signup';
import { StartPage } from '../pages/start/start';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: Page = CitiesPage;
  managePage: Page = ManagmentPage;
  signinPage: Page = SigninPage;
  signupPage: Page = SignupPage;
  startPage: Page = StartPage;
  isAuth:boolean = true;
  @ViewChild('content') content: NavController;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private menuController: MenuController,
              private authService: AuthService,
              private fire: AngularFireAuth) {
    
    this.fire.auth.onAuthStateChanged(user=>{
      if(user) {
        this.isAuth = this.authService.IS_AUTH = true;
        this.authService.USER_ = new User(user.email, user.photoURL);
        this.rootPage = CitiesPage;
      } else {
        this.isAuth = this.authService.IS_AUTH = false;
        this.authService.USER_ = null;
        this.rootPage = StartPage;
      }});
    
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

