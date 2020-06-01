import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ListItem, List } from '../list/models/list.model';
import { UserService } from '@core/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private firestore: AngularFirestore, private userService: UserService) {}

  public getCurrentList(): Observable<ListItem[]> {
    return this.userService.user$.pipe(
      switchMap(({ activeListId }) => {
        return this.firestore
          .doc<List>(`lists/${activeListId}`)
          .collection<ListItem>('items')
          .valueChanges();
      }),
    );
  }
}
