import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { BeerInfoPage } from './../beer-info/beer-info';
import { Beer } from './../../models/beer.model';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../../models/shop.model';

@Component({
  selector: 'page-beers-list',
  templateUrl: 'beers-list.html',
})

export class BeersListPage implements OnInit {
  shopName: string = '';
  beersList: Beer[];
  filteredBeers: Beer[];
  shop: Shop;

  constructor(private navParams: NavParams,
              private modalController: ModalController) { }
  
  ngOnInit(): void {
    this.shop = this.navParams.get('shop');
    this.shopName = this.shop.name;
    this.beersList = this.navParams.get('beers');
    this.filteredBeers = this.beersList;
  }

  onBeerInfoClick(beer: Beer): void {
    const modal = this.modalController.create(BeerInfoPage, {
      beer: beer, shopLocation: this.shop.location});
    modal.present();
  }

  refreshBeers(ev: any): void {
    let val: string = ev.target.value;
    if(val!=null && val.trim()!='') {
      const valCompare = val.trim().toLowerCase();
      this.filteredBeers = this.beersList.filter(beer => {
        return (beer.name.toLowerCase().startsWith(valCompare));
      });
    }else {
      this.filteredBeers = this.beersList;
    } 
  }
}
