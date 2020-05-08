import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { List, ListItem } from './models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private firestore: AngularFirestore) {}

  public getLists$(): Observable<List[]> {
    return this.firestore.collection<List>('lists').valueChanges({ idField: 'id' });
  }

  public getList$(id: string): Observable<List> {
    const list = this.firestore.doc<List>(`lists/${id}`);
    const listItems = list.collection<ListItem>('items');

    return combineLatest([list.valueChanges(), listItems.valueChanges({ idField: 'id' })]).pipe(
      map(([{ name }, items]) => {
        return {
          name,
          items,
        };
      }),
    );
  }
}
