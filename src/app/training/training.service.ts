import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { ListItem, List } from '../list/models/list.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private firestore: AngularFirestore) {}

  public getCurrentList(): Observable<ListItem[]> {
    const activeListId = 'TGzEYTGsmhD0evpkPBB6'; // replace it with the real id from user database

    return this.firestore.doc<List>(`lists/${activeListId}`).collection<ListItem>('items').valueChanges().pipe(first());
  }
}
