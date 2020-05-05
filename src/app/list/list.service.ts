import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { List } from './models/list.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private firestore: AngularFirestore) {}

  public getLists$(): Observable<List[]> {
    return this.firestore.collection<List>('lists').valueChanges();
  }
}
