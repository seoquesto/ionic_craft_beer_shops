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
  filteredBeers: Beer[];

  constructor(private navParams: NavParams,
              private modalController: ModalController) { }
  
  ngOnInit(): void {
    this.shopName = this.navParams.get('shopName');
    this.beersList = this.navParams.get('beers');
    this.filteredBeers = this.beersList;
  }

  onBeerInfoClick(beer: Beer) {
    const modal = this.modalController.create(BeerInfoPage, {
      beer: beer})
    modal.present();
  }

  refreshBeers(ev: any) {
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
