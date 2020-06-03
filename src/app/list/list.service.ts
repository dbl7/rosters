import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { List, ListItem } from './models/list.model';
import { UserService } from '@core/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private firestore: AngularFirestore, private userService: UserService) {}

  public getLists$(): Observable<List[]> {
    return combineLatest([
      this.firestore.collection<List>('lists').valueChanges({ idField: 'id' }),
      this.userService.user$,
    ]).pipe(
      map(([lists, user]) => {
        return lists.map((list) => ({ ...list, isActive: list.id === user.activeListId }));
      }),
    );
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

  public addPhrase(listId: string, phrase: string): Promise<DocumentReference> {
    const list = this.firestore.doc<List>(`lists/${listId}`);
    const listItems = list.collection<ListItem>('items');

    return listItems.add({ text: phrase, isHidden: false });
  }
}
