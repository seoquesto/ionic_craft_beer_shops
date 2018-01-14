import { Location } from './../models/location.model';
import { BeerComment } from './../models/beer-comment.model';
import { Shop } from './../models/shop.model';
import { City } from "../models/city.model";
import { Beer } from '../models/beer.model';
import { User } from '../models/user.model';

//Mock data, in feature will be removed and exchange on files from db
export default [
    new City("Lodz", [
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Bawarka", 10, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Son of a Birch", 10, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 5, 15, 15,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 20, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam', new Location(51.759445,19.457216) ),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Perla", 10, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 1, 11, 17,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Okocim", 20, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 2, 25, 35,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 30, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 3, 31, 21,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam1', new Location(51.759445,19.457216) ),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Perla", 10, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 1, 11, 20,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 12, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Bawarka", 40, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam2', new Location(51.759445,19.457216) ),
        new Shop("Chmielowa Dolina", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Bawarka", 12, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Son of a Birch", 52, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 5, 15, 15,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 141, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam3', new Location(51.759445,19.457216) ),
        new Shop("Piwa Paw", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Perla", 12, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 1, 11, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Okocim", 140, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 2, 25, 5,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 12, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 3, 31, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam4', new Location(51.759445,19.457216)),
        new Shop("Z innej beczki", "321-421-421", "95-124", "al. Wlokniarzy", 222, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Perla", 140, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 1, 11, 20,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 20, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Bawarka", 42, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'Adam5', new Location(51.759445,19.457216))
    ]),
    new City("Warsaw", [
        new Shop("Chmielowa Dolina in Warsaw", "421-421-125", "93-421", "al. TEST", 111, "https://pbs.twimg.com/profile_images/593707526971105280/FwnpRar_.jpg", [
            new Beer("Bawarka", 10, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 4, 10, 10,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
            new Beer("Tyskie", 20, "http://tysonsbiergarten.com/wp-content/uploads/2015/04/beer-icon.png", 6, 3, 11,
            [
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
                new BeerComment('The best beer', 5, new Date().toLocaleString(), new User('User01', 'https://image.flaticon.com/icons/png/128/149/149072.png')),
            ]),
        ], 'AdamFromWarsaw', new Location(51.759445,19.457216))]),
    new City('Krakow', []),
    new City('Poznan', [])
];