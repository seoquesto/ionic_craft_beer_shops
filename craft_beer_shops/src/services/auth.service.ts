import { User } from './../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    USER_:User = null;
    IS_AUTH: boolean = false;

    constructor( private fire: AngularFireAuth) { }

    isAuthenticated(): boolean {
        return true;
    }

    signup(email: string, password: string): Promise<any> {
        return this.fire.auth.createUserWithEmailAndPassword(email, password);
    }

    updateProfile(displayName: string, photoUrl: string): Promise<any> {
        return this.fire.auth.currentUser.updateProfile({
            displayName: displayName,
            photoURL: photoUrl
        });
    }

    signin(email: string, password: string): Promise<any> {
        return this.fire.auth.signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<any> {
        return this.fire.auth.signOut();
    }
}