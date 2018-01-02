import { BeersListPage } from './../beers-list/beers-list';
import { ShopInfoPage } from './../shop-info/shop-info';
import { NavParams, NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html',
})

export class ShopsListPage implements OnInit {
  filteredShops: Shop[];
  shops: Shop[];
  city: string = "";
  
  constructor(private navParams: NavParams,
              private navController: NavController,
              private modalController: ModalController) { }

  ngOnInit(): void {
    this.city = this.navParams.get('city');  
    this.shops = this.navParams.get('shops');
    this.filteredShops = this.shops;
  }

  onInformation(shop: Shop): void {
    let modal = this.modalController.create(ShopInfoPage, { shop: shop });
    modal.present();
  } 

  onShopClick(shop: Shop): void {
    this.navController.push(BeersListPage, {
      shopName: shop.name, beers: shop.beers});
  }

  refreshShops(ev: any): void {
    let val: string = ev.target.value;
    if(val!=null && val.trim()!='') {
      const valCompare = val.trim().toLowerCase();
      this.filteredShops = this.shops.filter(shop => {
        return (shop.name.toLowerCase().startsWith(valCompare));
      });
    }else {
      this.filteredShops = this.shops;
    }
  }
}
