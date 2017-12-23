import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city.model';
import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html',
})

export class ShopsListPage implements OnInit{
  cities: City[];
  constructor(private shoppingList: ShopListService) {
  }
  ngOnInit(): void {
    this.cities = this.shoppingList.get();
  }
}
