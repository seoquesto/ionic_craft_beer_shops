import { BeerComment } from './../models/beer-comment.model';
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

    getBeer(beername: string) {
        return this.cities.forEach(
            e=>e.shops.forEach(q=>q.beers.forEach(
                g=>{
                    if(g.name == beername){
                        return g;
                    }
                }
            ))
        );
    }

    addComment(beerName: string, comment: BeerComment) {
        this.cities.forEach(
            e=>e.shops.forEach(q=>q.beers.forEach(
                g=>{
                    if(g.name == beerName){
                        g.comments.unshift(comment);
                        console.log(g);
                        return;
                    }
                }
            ))
        );
    }
}