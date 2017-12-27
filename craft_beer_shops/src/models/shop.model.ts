import { Beer } from "./beer.model";

export class Shop {
    constructor(public name: string,
                public phoneNumber: string,
                public postalAddress: string,
                public street: string, 
                public buildingNumber: number,
                public photo: string, 
                public beers: Beer[],
                public ownerName: string) { }
}