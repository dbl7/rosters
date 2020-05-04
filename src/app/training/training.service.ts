import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { mergeMap, first } from 'rxjs/operators';

import { ListItem } from '../list/models/list.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private firestore: AngularFirestore) {}

  public getCurrentList(): Observable<ListItem[]> {
    const currentList = this.firestore.collection('lists', (ref) => ref.where('isCurrent', '==', 'true'));

    return currentList.get().pipe(
      mergeMap(({ docs }) => currentList.doc(docs[0].id).collection<ListItem>('items').valueChanges()),
      first(),
    );
  }
}
