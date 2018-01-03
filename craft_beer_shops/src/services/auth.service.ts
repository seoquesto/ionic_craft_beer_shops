import { User } from './../models/user.model';
import * as firebase from 'firebase';
import { auth } from 'firebase';

export class AuthService {
    USER_:User = null;
    IS_AUTH: boolean = false;

    isAuthenticated(): boolean {
        return true;
    }

    signup(email: string, password: string): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    updateProfile(displayName: string, photoUrl: string): Promise<any> {
        return firebase.auth().currentUser.updateProfile({
            displayName: displayName,
            photoURL: photoUrl
        });
    }

    signin(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout(): Promise<any> {
        return auth().signOut();
    }
}