import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ListService } from '../../list.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'rs-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsPageComponent implements OnInit {
  public lists$: Observable<List[]>;

  constructor(private listSercice: ListService) {}

  public ngOnInit(): void {
    this.lists$ = this.listSercice.getLists$();
  }
}
