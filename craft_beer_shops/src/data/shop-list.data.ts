import { BeerComment } from './../models/beer-comment.model';
import { Shop } from './../models/shop.model';
import { City } from "../models/city.model";
import { Beer } from '../models/beer.model';
import { User } from '../models/user.model';

//Mock data, in feature will be removed and exchange on files from db
export default [
    new City("Lodz", [
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 10, "SomeBeerPhoto", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Son of a Birch", 10, "SomeBeerPhoto", 5, 15, 15,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 20, "SomeBeerPhoto", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 10, "SomeBeerPhoto", 1, 11, 17,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Okocim", 20, "SomeBeerPhoto", 2, 25, 35,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 30, "SomeBeerPhoto", 3, 31, 21,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 10, "SomeBeerPhoto", 1, 11, 20,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 12, "SomeBeerPhoto", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Bawarka", 40, "SomeBeerPhoto", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 12, "SomeBeerPhoto", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Son of a Birch", 52, "SomeBeerPhoto", 5, 15, 15,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 141, "SomeBeerPhoto", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 12, "SomeBeerPhoto", 1, 11, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Okocim", 140, "SomeBeerPhoto", 2, 25, 5,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 12, "SomeBeerPhoto", 3, 31, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 140, "SomeBeerPhoto", 1, 11, 20,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Tyskie", 20, "SomeBeerPhoto", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
            new Beer("Bawarka", 42, "SomeBeerPhoto", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'SomeUserPhoto')),
            ]),
        ])
    ]),
];