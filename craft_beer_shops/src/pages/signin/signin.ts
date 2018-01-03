import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Alert, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {

  constructor(private authService: AuthService, 
    private alertController: AlertController,
    private loadingService: LoadingService) { }

  onSubmit(form: NgForm): void {
    this.loadingService.createLoadingTile('Signing you up..');
    this.authService.signin(form.form.get('email').value,
                            form.form.get('email').value)
                    .then((data)=> {
                      this.loadingService.hideLoadingTile();
                    })
                    .catch((error)=>{
                      this.loadingService.hideLoadingTile();
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
}
