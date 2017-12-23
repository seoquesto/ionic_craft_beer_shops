import { DisplayService } from './../../services/display.service';
import { Component } from '@angular/core';
import { City } from '../../models/city.model';

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})

export class CitiesPage {
  public cities: City[];
  
  constructor(private displayService: DisplayService) {
    this.cities = displayService.getCities();  
  }
}
