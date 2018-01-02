import { AuthService } from './auth.service';
import { BeerComment } from './../models/beer-comment.model';
import { DisplayService } from './display.service';
import { Injectable } from "@angular/core";

@Injectable()
export class CommentService {
    constructor(private displayService: DisplayService, private authService: AuthService) { }
    
    addComment(beerName: string, comment: string, note: number): void {
        let beerComment = new BeerComment(comment,note, new Date().toLocaleString(), this.authService.USER_);
        this.displayService.addComment(beerName, beerComment);
    }
}