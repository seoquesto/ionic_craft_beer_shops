import { Beer } from './../models/beer.model';
import { DisplayService } from './display.service';
import { Injectable } from "@angular/core";
import { Shop } from '../models/shop.model';
import { AuthService } from './auth.service';

@Injectable()
export class ManagmentService {
    private shopName: string = '';
    private ownerName: string = '';
    private manageShop: Shop;
    private manageBeers: Beer[] = [];
    private editMode: boolean = false;

    constructor(private displayService: DisplayService,
                private authService: AuthService) {
        this.initManagment();
    }

    hasShop(): boolean {
        return this.displayService.getShop(this.ownerName) !=null;
    }

    initManagment() {
        this.ownerName = this.authService.getUser().name;

        if(this.hasShop()){
            const temp = this.displayService.getShop(this.ownerName);
            this.manageShop = new Shop(temp.name, temp.phoneNumber, temp.postalAddress, temp.street, temp.buildingNumber, temp.photo, [], this.ownerName);
            if(this.manageShop.beers!=null) {
                temp.beers.forEach(e=>this.manageBeers.push(e));
            }
            this.editMode = true;
            this.shopName = this.manageShop.name;
        }
        else {
            this.editMode = false;
            this.manageBeers = [];
            this.manageShop = new Shop('','','','',null,'',this.manageBeers,this.ownerName);
            this.shopName = '';
        }
    }

    setShopValues(name: string, phone: string, city: string, postal: string, street: string, building: number, photo: string) {
        this.manageShop.name = name;
        this.manageShop.phoneNumber = phone;
        this.manageShop.postalAddress = postal;
        this.manageShop.street = street;
        this.manageShop.buildingNumber = building;
        this.manageShop.photo = photo;
        
        this.manageShop.beers = [];

        if(this.manageBeers!=null) {
            this.manageBeers.forEach(e=>this.manageShop.beers.push(e));
        }

        if(this.editMode) {
            this.displayService.updateShop(city, this.shopName, this.manageShop);
        }
        else {
            this.displayService.insertShop(city, this.manageShop);
        }
        this.shopName = this.manageShop.name;
        this.editMode = true;
    }

    addBeer(name: string, price: number, photo: string, perc: number, ibu: number, plato: number): void {
        const beer = new Beer(name, price, photo, perc, ibu, plato, []);
        this.manageBeers.unshift(beer);
    }

    editBeer(prevNamme: string, name: string, price: number, photo: string, perc: number, ibu: number, plato: number) {
        const beer = new Beer(name, price, photo, perc, ibu, plato, []);
        this.updateBeer(prevNamme, beer);
    }

    updateBeer(prevBeerName: string, beer: Beer) {
        let beerToUpdate = this.findBeer(prevBeerName);
        beerToUpdate.name = beer.name;
        beerToUpdate.ibu = beer.ibu;
        beerToUpdate.percentages = beer.percentages;
        beerToUpdate.photo = beer.photo;
        beerToUpdate.plato = beer.plato;
        beerToUpdate.price = beer.price;
        //comments are not needed becouse we work on the reference
    }

    findBeer(searchBeerName: string): Beer {
        return this.manageBeers.find(b=>b.name == searchBeerName);
    }
    
    removeBeer(beer: Beer): void {
        const index = this.manageBeers.findIndex(e=>e.name==beer.name);
        if(index < 0) {
            console.error(`Beer ${beer.name} doesnt exist!!!`);
            return;
        }
        this.manageBeers.slice(index,1);
    }

    getBeers(): Beer[] {
        return this.manageBeers;
    }

    getShop(): Shop {
        return this.manageShop;
    }
}