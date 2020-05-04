import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { List } from './models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  public lists$: Observable<List[]>;

  constructor(firestore: AngularFirestore) {
    this.lists$ = firestore.collection<List>('lists').valueChanges();
  }
}
