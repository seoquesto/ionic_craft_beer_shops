import { LoadingService } from './../../services/loading.service';
import { Location } from './../../models/location.model';
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
  private yourLocation: Location;
  private shopLocation: Location;
  
  constructor(private navParams: NavParams,
              private viewController: ViewController,
              private commentService: CommentService,
              private alertCtrl: AlertController,
              private toastController: ToastController,
              private loadingService: LoadingService) { }
  
  ngOnInit(): void {
    this.beer = this.navParams.get('beer');
    this.shopLocation = this.navParams.get("shopLocation");
  }

  onClose(): void {
    this.viewController.dismiss();
  }

  get getAverage(): number | string {
    let commentsLength = this.commentsLength; 
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
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos)=>{
            let dist: number = -1;
            this.yourLocation = new Location(pos.coords.latitude, pos.coords.longitude);
            console.log((this.distance(this.yourLocation.lat,this.yourLocation.lng, 
              this.shopLocation.lat, this.shopLocation.lng, "K")*1000).toFixed(2));
              dist = +(this.distance(this.yourLocation.lat,this.yourLocation.lng, 
                this.shopLocation.lat, this.shopLocation.lng, "K")*1000).toFixed(2);
                let alert = this.alertCtrl.create({
                  title: 'Add your comment',
                  subTitle: 'Please add your comment and note :) Thanks!',
                  message: `Remember, this is possible only when distance to the craft beer shop is no more than 250 meters. Your distance: ${dist}.`,
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
                        if(dist > 250) {
                          this.createToast('Distance is bigger than 250!.');
                          return false;
                        }
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
          },
          (error)=>{
            this.loadingService.createLoadingTile("Please enable your GPS!");
            setTimeout(()=>{
              this.loadingService.hideLoadingTile();
            },3000);
          }
        );
      }

    }

    
   distance(lat1, lon1, lat2, lon2, unit): number {
      var radlat1 = Math.PI * lat1/180
      var radlat2 = Math.PI * lat2/180
      var theta = lon1-lon2
      var radtheta = Math.PI * theta/180
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist)
      dist = dist * 180/Math.PI
      dist = dist * 60 * 1.1515
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist
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