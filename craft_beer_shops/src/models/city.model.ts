import { Shop } from "./shop.model";

export class City {
    constructor(public name: string, public shops: Shop[]) { }
}