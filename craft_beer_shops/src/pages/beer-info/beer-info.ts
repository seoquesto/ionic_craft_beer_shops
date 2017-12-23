import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'page-beer-info',
  templateUrl: 'beer-info.html',
})

export class BeerInfoPage implements OnInit {
  beer: Beer;
  
  constructor(private navParams: NavParams,
              private viewController: ViewController) { }
  
  ngOnInit(): void {
    this.beer = this.navParams.get('beer');
  }

  onClose(): void {
    this.viewController.dismiss();
  }
}
