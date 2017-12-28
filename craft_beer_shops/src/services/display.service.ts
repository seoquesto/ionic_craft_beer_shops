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
        return this.cities;
    }

    getCitiesString(): string[] {
        let list:string[] = [];
        this.cities.forEach(e=>{list.push(e.name);});
        return list;
    }
    
    getShops(city: string): Shop[] {
        return this.cities.find(e=>e.name==city).shops;
    }

    insertShop(city: string, shop: Shop) {
        this.cities.find(e=>e.name==city).shops.unshift(shop);
    }

    updateShop(city: string, prevShopName:string, shop: Shop) {
        let cityIndex = this.cities.findIndex(e=>e.name == city);
        let shopIndex = this.cities[cityIndex].shops.findIndex(e=>e.name == prevShopName);
        this.cities[cityIndex].shops[shopIndex] = shop;
    }

    updateShopCity(newCity: string, oldCity: string, prevShopName:string, shop: Shop) {
        let cityIndex = this.cities.findIndex(e=>e.name == oldCity);
        let shopIndex = this.cities[cityIndex].shops.findIndex(e=>e.name == prevShopName);
        this.cities[cityIndex].shops.splice(shopIndex,1);
        
        this.insertShop(newCity, shop);
    }


    getShop(userName: string): {shop: Shop, cityName: string} | null {
        this.cities.forEach(e=>{
            if(e.shops!=null && e.shops.length > 0){
                e.shops.forEach(s=>{
                    if(s.ownerName===userName){
                        return {shop: s, cityName: e.name };
                    }
                });
            }
        });
        return null;
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
                        return;
                    }
                }
            ))
        );
    }
}