import { BeerComment } from "./beer-comment.model";

export class Beer {
    constructor(public name: string,
                public price: number,
                public photo: string,
                public percentages: number,
                public ibu: number,
                public plato: number,
                public comments: BeerComment[]) { }
}