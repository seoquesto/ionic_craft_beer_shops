import { Shop } from './../../models/shop.model';
import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { CallNumber } from "@ionic-native/call-number";

@Component({
  selector: 'page-shop-info',
  templateUrl: 'shop-info.html',
})

export class ShopInfoPage implements OnInit {
  shop: Shop;
  
  constructor(private viewController: ViewController,
              private navParams: NavParams,
              private callNumber: CallNumber) { }
    
    ngOnInit(): void {
      this.shop = this.navParams.get('shop');
    }

    onClose(): void {
      this.viewController.dismiss();
    }

    // It will not be working on any web browser. I suppose this will be working 
    // only on mobile devices, becouse i noticed some alert in my web browser
    // with alert that contain message like: ... cordova.js is not available.
    // This must be checked before our "release"
    phoneNumberClick(): void {
      try{
        this.callNumber.callNumber(this.shop.phoneNumber, true);
      }catch(ex) {
        console.log("Calling exception..", ex);
      }
    }
}
