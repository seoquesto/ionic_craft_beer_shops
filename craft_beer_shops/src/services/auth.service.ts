import { User } from './../models/user.model';

export class AuthService {
    private user = new User('Ad1am','https://www.shareicon.net/data/128x128/2015/09/18/103160_man_512x512.png');
    
    isAuthenticated(): boolean {
        return true;
    }
    
    getUser() {
        return this.user;
    }
}