import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ListService } from '../list.service';
import { List } from '../models/list.model';

@Component({
  selector: 'rs-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent implements OnInit {
  public lists$: Observable<List[]>;

  constructor(private listSercice: ListService) {}

  public ngOnInit(): void {
    this.lists$ = this.listSercice.lists$;
  }
}
