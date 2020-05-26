import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ListItem, List } from '@app/list/models/list.model';
import { AuthService } from '@app/auth/auth.service';
import { ListService } from '@app/list/list.service';
import { UserService } from '@core/services/user/user.service';

import { TrainingService } from '../../training.service';

@Component({
  selector: 'rs-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPageComponent implements OnInit {
  public phrases$: Observable<ListItem[]>;
  public lists$: Observable<List[]>;

  constructor(
    private trainingService: TrainingService,
    private listSercice: ListService,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.phrases$ = this.trainingService.getCurrentList();
    this.lists$ = this.listSercice.getLists$();
  }

  public switchList(list: List): void {
    this.userService.setActiveList(list.id);
  }

  public logout(): void {
    this.authService.logout();
  }
}
