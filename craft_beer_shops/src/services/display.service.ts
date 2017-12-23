import data from '../data/shop-list.data';
import { City } from "../models/city.model";

export class DisplayService {
    private cities: City[];
    constructor() {
        this.cities = data;
    }
    getCities() {
        return this.cities.slice();
    }
}