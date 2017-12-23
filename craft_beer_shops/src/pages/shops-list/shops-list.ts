import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';

@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html',
})

export class ShopsListPage implements OnInit {
  shops: Shop[];
  city: string = "";
  
  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.city = this.navParams.get('city');  
    this.shops = this.navParams.get('shops');
  }

  onInformation(shop: Shop): void {
    //modal information
  } 
}
