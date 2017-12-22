import { CityService } from './../../services/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html',
})

export class ShopsListPage implements OnInit{
  cities: City[];
  constructor(private cityService: CityService) {
  }
  ngOnInit(): void {
    this.cities = this.cityService.get();
    console.log(this.cities);
  }
}
