import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular';
import { Alert } from 'ionic-angular/components/alert/alert';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  private loading: Loading;

  constructor(private authService: AuthService, 
              private alertController: AlertController,
              private loadingController: LoadingController) { }

  onSubmit(form: NgForm): void {
    this.createLoadingTile();
    this.authService.signup(form.form.get('email').value, 
                            form.form.get('password').value)
                            .then((result)=>{
                              this.hideLoadingTile();
                            })
                            .catch((error)=>{
                              this.hideLoadingTile();
                              this.backendAllert(error.message);
                            });
  }

  private backendAllert(message: string): void {
    if(message != null && message.trim().length > 1)
    {
      const alert: Alert = this.alertController.create({
                                  title: 'Error',
                                  message: message,
                                  buttons: ['Ok']});
      alert.present();
    }
  }

  private createLoadingTile(): void {
    this.loading = this.loadingController.create({
      content: 'Signing you up...'
    });
    this.loading.present();
  }

  private hideLoadingTile(): void {
    this.loading.dismiss();
  }
}
