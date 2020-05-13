import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { auth } from 'firebase';

import { AuthData } from './models';
import { User } from '../shared/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private firestoreAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  public emailSignUp({
    email,
    password,
  }: AuthData): Promise<firebase.auth.UserCredential | boolean | void> {
    return this.firestoreAuth
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => this.updateUser(credential.user))
      .then(() => this.emailLogin({ email, password }))
      .catch((error: firebase.auth.AuthError) => {
        this.snackBar.open(error.message);
      });
  }

  public emailLogin({
    email,
    password,
  }: AuthData): Promise<firebase.auth.UserCredential | boolean | void> {
    return this.firestoreAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error: firebase.auth.AuthError) => {
        this.snackBar.open(error.message);
      });
  }

  public googleSignIn(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    return this.firestoreAuth
      .signInWithPopup(provider)
      .then((credential) => this.updateUser(credential.user))
      .catch((error: firebase.auth.AuthError) => {
        this.snackBar.open(error.message);
      });
  }

  public logout(): Promise<boolean> {
    return this.firestoreAuth.signOut().then(() => this.router.navigate(['/auth']));
  }

  private updateUser(user: firebase.User): Promise<void> {
    const userDoc: AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      activeListId: null,
    };

    return userDoc.set(data, { merge: true });
  }
}
