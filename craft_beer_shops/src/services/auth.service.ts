import { User } from './../models/user.model';
import * as firebase from 'firebase';

export class AuthService {
    private user = new User('Adam','https://www.shareicon.net/data/128x128/2015/09/18/103160_man_512x512.png');
    
    isAuthenticated(): boolean {
        return true;
    }
    
    getUser() {
        return this.user;
    }

    signup(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signin(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}