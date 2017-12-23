import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html',
})

export class ShopsListPage implements OnInit {
  cities: City[];

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.cities = this.displayService.getCities();
  }
}
