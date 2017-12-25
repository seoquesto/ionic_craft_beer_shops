import { User } from './../models/user.model';
import { BeerComment } from './../models/beer-comment.model';
import { DisplayService } from './display.service';
import { Injectable } from "@angular/core";
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Beer } from '../models/beer.model';

@Injectable()
export class CommentService {
    user = new User('Adam','https://www.shareicon.net/data/128x128/2015/09/18/103160_man_512x512.png');
    
    constructor(private displayService: DisplayService) { }
    
    addComment(beerName: string, comment: string, note: number): void {
        let beerComment = new BeerComment(comment,note, new Date().toLocaleString(), this.user);
        this.displayService.addComment(beerName, beerComment);
    }
}