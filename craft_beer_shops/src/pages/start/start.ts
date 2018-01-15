import { LoadingService } from './../../services/loading.service';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})

export class StartPage {
  constructor(private fire: AngularFireAuth, 
              private nav: NavController,
              private loadingService: LoadingService) { }

  loginWithFacebook() {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (res)=>{
        this.nav.goToRoot({});
      }).catch(error=>{
        let errMess:string = error.message;
          if(errMess==null && errMess.trim() != ""){
            this.loadingService.createLoadingTile("Problem with sigin via facebook page..");
          }else {
            this.loadingService.createLoadingTile(errMess);
          }
        setTimeout(()=>{
          this.loadingService.hideLoadingTile();
        },3000);
      });
  }
  loginWithGoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (res)=>{
        this.nav.goToRoot({});
      }).catch(error=>{
        let errMess:string = error.message;
          if(errMess==null && errMess.trim() != ""){
            this.loadingService.createLoadingTile("Problem with sigin via facebook page..");
          }else {
            this.loadingService.createLoadingTile(errMess);
          }
        setTimeout(()=>{
          this.loadingService.hideLoadingTile();
        },3000);
      });
  }
}