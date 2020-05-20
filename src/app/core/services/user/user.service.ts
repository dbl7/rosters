import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { map, switchMap, first } from 'rxjs/operators';

import { User } from '@shared/models';

@Injectable({ providedIn: 'root' })
export class UserService {
  public user$: Observable<User>;

  constructor(private firestoreAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.firestoreAuth.authState.pipe(
      switchMap((user) => {
        return user ? this.firestore.doc<User>(`users/${user.uid}`).valueChanges() : of(null);
      }),
    );
  }

  public isAuthenticated$(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  public setActiveList(listId: string): void {
    this.user$.pipe(first()).subscribe(({ uid }) => {
      this.firestore.doc(`users/${uid}`).update({
        activeListId: listId,
      });
    });
  }
}
