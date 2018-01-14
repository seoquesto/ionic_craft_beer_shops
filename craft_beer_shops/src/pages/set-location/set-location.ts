import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { Location } from './../../models/location.model';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})

export class SetLocationPage implements OnInit {
  location: Location;
  markerLocation: Location;
  hasAlreadyLocation: boolean = false;
  
  constructor(private navParams: NavParams,
              private viewController: ViewController,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.location = new Location(this.navParams.get('lat'), this.navParams.get('lng'));
    this.hasAlreadyLocation = this.navParams.get('hasAlreadyLocation');

    if(this.hasAlreadyLocation){
      this.markerLocation = new Location(this.location.lat, this.location.lng);
    } else {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos)=>{
            this.location = new Location(pos.coords.latitude, pos.coords.longitude);},
          (error)=>{
            this.loadingService.createLoadingTile("Please enable your GPS!");
            setTimeout(()=>{
              this.loadingService.hideLoadingTile();
              this.onAbort();
            },3000);
          }
          );
      }
    }
  }

  onMapClick(event: any): void {
    this.markerLocation = new Location(event.coords.lat, event.coords.lng);
  }

  onConfirm(): void {
    this.viewController.dismiss({location: this.markerLocation});
  }

  onAbort(): void {
    this.viewController.dismiss();
  }
}
