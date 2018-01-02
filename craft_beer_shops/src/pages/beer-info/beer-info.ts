import { CommentService } from './../../services/comment.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-beer-info',
  templateUrl: 'beer-info.html',
})

export class BeerInfoPage implements OnInit {
  beer: Beer;
  segment: string = 'description';
  private commentContentLengthLimits:number[] = [1,50];
  private rateLimits:number[] = [1,6];
  
  constructor(private navParams: NavParams,
              private viewController: ViewController,
              private commentService: CommentService,
              private alertCtrl: AlertController,
              private toastController: ToastController) { }
  
  ngOnInit(): void {
    this.beer = this.navParams.get('beer');
  }

  onClose(): void {
    this.viewController.dismiss();
  }

  get getAverage(): number | string {
    let commentsLength = this.commentsLength; 
    console.log(commentsLength);
    if(commentsLength > 0) {
      let s: number = 0;
      this.beer.comments.forEach(e=>{
        s +=+e.rate;
      });
      return s/commentsLength;
    }
    return "---";
  }

  get commentsLength(): number {
    return this.beer.comments != null ? this.beer.comments.length : 0; 
  }

  onAddComment(): void {
      let alert = this.alertCtrl.create({
        title: 'Add your comment',
        subTitle: 'Please add your comment and note :) Thanks!',
        inputs: [
          {
            name: 'comment',
            type: 'text',
            placeholder: 'Your comment..',
            max: this.commentContentLengthLimits[1]
          },
          {
            name: 'range',
            type: 'number',
            value: this.rateLimits[1].toString(),
            min: this.rateLimits[0],
            max: this.rateLimits[1]
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Add',
            handler: data => {
              const contentLength = data.comment.trim().length; 
              const ragneValue = +data.range;
              if(contentLength < this.commentContentLengthLimits[0]) {
                this.createToast('Please add a comment !');
                return false;
              } else if(contentLength > this.commentContentLengthLimits[1]) {
                this.createToast(`Your comment should have maximum ${this.commentContentLengthLimits[1]} signs!`);
                return false;
              }else if(ragneValue < this.rateLimits[0] || ragneValue > this.rateLimits[1]) {
                this.createToast(`The rating should be in the range: "${this.rateLimits[0]}-${this.rateLimits[1]}"`);
                return false;
              }
              this.addComment(data);
            }
          }
        ]
      });
      alert.present();
    }

    private addComment(data): void {
      this.commentService.addComment(this.beer.name, data.comment, data.range);
    }

    private createToast(message: string): void {
      let toastMessage = this.toastController.create({
        message: message,
        duration: 1200, position: 'bottom',
        closeButtonText: 'Close',
        showCloseButton: true,
      });
      toastMessage.present();
    }
    
}