import data from '../data/shop-list.data';
import { City } from "../models/city.model";
import { Shop } from '../models/shop.model';

export class DisplayService {
    private cities: City[];
    
    constructor() {
        this.cities = data;
    }
    
    getCities() {
        return this.cities.slice();
    }
    
    getShops(city: string): Shop[] {
        return this.cities.find(e=>e.name==city).shops.slice();
    }
}