import { Beer } from "./beer.model";

export class Shop {

    constructor(public name: string, public photo: string, public beers: Beer[]) {
    }
    
}