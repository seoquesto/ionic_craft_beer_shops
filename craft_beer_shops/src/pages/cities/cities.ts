import { ShopsListPage } from './../shops-list/shops-list';
import { NavController } from 'ionic-angular';
import { DisplayService } from './../../services/display.service';
import { Component } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})

export class CitiesPage {
  cityViewModels: CityViewModel[] = [];
  
  constructor(private displayService: DisplayService,
              private navController: NavController) {
    const cities = displayService.getCities();  
    this.initDisplayData(cities);
  }

  initDisplayData(cities: City[]) {
    cities.forEach((city)=>{
      this.cityViewModels.push({city: city, count: city.shops.length});
    });
  }

  onClick(city: City): void {
    this.navController.push(ShopsListPage, {
      city: city.name,
      shops: this.displayService.getShops(city.name)
    });
  }
}

interface CityViewModel {
  city: City;
  count: number;
}