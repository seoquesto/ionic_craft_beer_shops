import { UploadService } from './../../services/upload-file.service';
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
  avatarUrl: string = '';

  constructor(private authService: AuthService, 
              private alertController: AlertController,
              private loadingController: LoadingController,
              private uploadService: UploadService) { }

  onSubmit(form: NgForm): void {
    this.createLoadingTile( 'Signing you up...');
    const emailValue: string = form.form.get('email').value;
    const passwordValue: string = form.form.get('password').value;
    this.authService.signup(emailValue, passwordValue)
                    .then((result)=>{
                      this.authService.updateProfile(emailValue, this.avatarUrl)
                                      .then((result)=>{
                                        this.hideLoadingTile();
                                      })
                                      .catch((error)=>{
                                        this.hideLoadingTile();
                                        this.backendAllert(error.message);
                                      });
                    })
                    .catch((error)=>{
                      this.hideLoadingTile();
                      this.backendAllert(error.message);
                    });
  }

  async changeAvatarPhoto(event: any): Promise<void> {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.createLoadingTile('Avatar uploading..');
      this.uploadService.upload(file, 'avatars').then((data:string)=>{
        this.avatarUrl = data;
        this.hideLoadingTile();
      });
    }
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

  private createLoadingTile(loadingMessage: string): void {
    this.loading = this.loadingController.create({
      content: loadingMessage
    });
    this.loading.present();
  }

  private hideLoadingTile(): void {
    this.loading.dismiss();
  }
}
