import { User } from "./user.model";

export class BeerComment {
    constructor(public content: string,
                public rate: number,
                public date: string,
                public user: User) { }
}