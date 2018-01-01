import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Loading, AlertController, LoadingController, Alert } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  private loading: Loading;

  constructor(private authService: AuthService, 
    private alertController: AlertController,
    private loadingController: LoadingController) { }

  onSubmit(form: NgForm) {
    this.createLoadingTile();
    this.authService.signin(form.form.get('email').value,
                            form.form.get('email').value)
                    .then((data)=> {
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
                                  title: 'Signin failed!',
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
