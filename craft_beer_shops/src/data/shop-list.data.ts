import { Shop } from './../models/shop.model';
import { City } from "../models/city.model";
import { Beer } from '../models/beer.model';

//Mock data, in feature will be removed and exchange on files from db
export default [
    new City("Lodz", [
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 10, "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", 10, "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", 20, "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 10, "SomeBeerPhoto", 1, 11, 17),
            new Beer("Okocim", 20, "SomeBeerPhoto", 2, 25, 35),
            new Beer("Tyskie", 30, "SomeBeerPhoto", 3, 31, 21),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 10, "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", 12, "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", 40, "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 12, "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", 52, "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", 141, "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 12, "SomeBeerPhoto", 1, 11, 10),
            new Beer("Okocim", 140, "SomeBeerPhoto", 2, 25, 5),
            new Beer("Tyskie", 12, "SomeBeerPhoto", 3, 31, 11),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 140, "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", 20, "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", 42, "SomeBeerPhoto", 4, 10, 10),
        ])
    ]),
    new City("Krakow", [
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222,"SomePhotoUrl", [
            new Beer("Perla", 420, "SomeBeerPhoto", 1, 11, 10),
            new Beer("Okocim", 102, "SomeBeerPhoto", 2, 25, 5),
            new Beer("Tyskie", 142, "SomeBeerPhoto", 3, 31, 11),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 104, "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", 1, "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", 40, "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 20, "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", 40, "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", 12, "SomeBeerPhoto", 6, 3, 11),
        ]),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 132, "SomeBeerPhoto", 1, 11, 17),
            new Beer("Okocim", 11, "SomeBeerPhoto", 2, 25, 35),
            new Beer("Tyskie", 14, "SomeBeerPhoto", 3, 31, 21),
        ]),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Perla", 12, "SomeBeerPhoto", 1, 11, 20),
            new Beer("Tyskie", 14, "SomeBeerPhoto", 6, 3, 11),
            new Beer("Bawarka", 50, "SomeBeerPhoto", 4, 10, 10),
        ]),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "SomePhotoUrl", [
            new Beer("Bawarka", 42, "SomeBeerPhoto", 4, 10, 10),
            new Beer("Son of a Birch", 421, "SomeBeerPhoto", 5, 15, 15),
            new Beer("Tyskie", 16, "SomeBeerPhoto", 6, 3, 11),
        ]),
    ])
];