import { ShopsListPage } from './../shops-list/shops-list';
import { NavController, NavParams } from 'ionic-angular';
import { DisplayService } from './../../services/display.service';
import { Component } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})

export class CitiesPage {
  public cities: City[];
  
  constructor(private displayService: DisplayService,
              private navController: NavController) {
    this.cities = displayService.getCities();  
  }

  onClick(city: City): void {
    this.navController.push(ShopsListPage, {
      city: city.name,
      shops: this.displayService.getShops(city.name)
    });
  }
}
