import { Shop } from './../models/shop.model';
import { City } from "../models/city.model";
import { Beer } from '../models/beer.model';

//Mock data, in feature will be removed and exchange on files from db
export default [
    new City("Lodz", [
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 17),
            new Beer("Okocim", "SomeBeerPhoto", 2, 25, 35),
            new Beer("Tyskie", "SomeBeerPhoto", 3, 31, 21),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 10),
            new Beer("Okocim", "SomeBeerPhoto", 2, 25, 5),
            new Beer("Tyskie", "SomeBeerPhoto", 3, 31, 11),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
        ])
    ]),
    new City("Krakow", [
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222,"SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 10),
            new Beer("Okocim", "SomeBeerPhoto", 2, 25, 5),
            new Beer("Tyskie", "SomeBeerPhoto", 3, 31, 11),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 17),
            new Beer("Okocim", "SomeBeerPhoto", 2, 25, 35),
            new Beer("Tyskie", "SomeBeerPhoto", 3, 31, 21),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", "SomeBeerPhoto", 6, 3, 11),
        ]),
    ])
];