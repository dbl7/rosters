import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { UserService } from '@core/services/user/user.service';
import { ListService } from '@app/list/list.service';
import { List } from '@app/list/models/list.model';

@Component({
  selector: 'rs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Output() public closeMenu: EventEmitter<void> = new EventEmitter();

  public lists$: Observable<List[]>;

  constructor(
    private listService: ListService,
    private userService: UserService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.lists$ = this.listService.getLists$();
  }

  public switchList(list: List): void {
    this.userService.setActiveList(list.id);
    this.router.navigate(['']);
    this.close();
  }

  public addPhrase(): void {
    this.userService.user$.pipe(first()).subscribe(({ activeListId }) => {
      this.openPage(['lists', activeListId, 'add']);
    });
  }

  public openLists(): void {
    this.openPage(['lists']);
  }

  public openSettings(): void {
    this.openPage(['settings']);
  }

  public openPage(path: string[]): void {
    this.router.navigate(path);
    this.close();
  }

  public close(): void {
    this.closeMenu.emit();
  }
}
