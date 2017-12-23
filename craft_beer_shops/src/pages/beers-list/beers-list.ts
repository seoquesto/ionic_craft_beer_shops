import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { BeerInfoPage } from './../beer-info/beer-info';
import { Beer } from './../../models/beer.model';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-beers-list',
  templateUrl: 'beers-list.html',
})

export class BeersListPage implements OnInit{
  shopName: string = '';
  beersList: Beer[];

  constructor(private navParams: NavParams,
              private modalController: ModalController) { }
  
  ngOnInit(): void {
    this.shopName = this.navParams.get('shopName');
    this.beersList = this.navParams.get('beers');
  }

  onBeerInfoClick(beer: Beer) {
    const modal = this.modalController.create(BeerInfoPage, {
      beer: beer})
    modal.present();
  }
}
