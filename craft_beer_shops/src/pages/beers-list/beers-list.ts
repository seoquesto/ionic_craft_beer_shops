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

  constructor(private navParams: NavParams) { }
  
  ngOnInit(): void {
    this.shopName = this.navParams.get('shopName');
    this.beersList = this.navParams.get('beers');
  }
}
