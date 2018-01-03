import { LoadingService } from './../../services/loading.service';
import { UploadService } from './../../services/upload-file.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Alert } from 'ionic-angular/components/alert/alert';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  avatarUrl: string = '';

  constructor(private authService: AuthService, 
              private alertController: AlertController,
              private uploadService: UploadService,
              private loadingService: LoadingService) { }

  onSubmit(form: NgForm): void {
    this.loadingService.createLoadingTile( 'Signing you up...');
    const emailValue: string = form.form.get('email').value;
    const passwordValue: string = form.form.get('password').value;
    this.authService.signup(emailValue, passwordValue)
                    .then((result)=>{
                      this.authService.updateProfile(emailValue, this.avatarUrl)
                                      .then((result)=>{
                                        this.loadingService.hideLoadingTile();
                                      })
                                      .catch((error)=>{
                                        this.loadingService.hideLoadingTile();
                                        this.backendAllert(error.message);
                                      });
                    })
                    .catch((error)=>{
                      this.loadingService.hideLoadingTile();
                      this.backendAllert(error.message);
                    });
  }

  async changeAvatarPhoto(event: any): Promise<void> {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      this.loadingService.createLoadingTile('Avatar uploading..');
      this.uploadService.upload(file, 'avatars').then((data:string)=>{
        this.avatarUrl = data;
        this.loadingService.hideLoadingTile();
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
}
