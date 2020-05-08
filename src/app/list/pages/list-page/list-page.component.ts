import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ListService } from '../../list.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'rs-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit {
  public list$: Observable<List>;

  constructor(private activatedRoute: ActivatedRoute, private listService: ListService) {}

  public ngOnInit(): void {
    this.list$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.listService.getList$(id)),
    );
  }
}
