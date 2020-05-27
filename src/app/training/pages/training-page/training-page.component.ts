import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  public phrases$: Observable<string[]>;
  public lists$: Observable<List[]>;

  constructor(
    private trainingService: TrainingService,
    private listService: ListService,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  public ngOnInit(): void {
    this.lists$ = this.listService.getLists$();
    this.phrases$ = this.trainingService
      .getCurrentList()
      .pipe(map((phrases) => phrases.map((phrase) => phrase.text)));
  }

  public switchList(list: List): void {
    this.userService.setActiveList(list.id);
  }

  public logout(): void {
    this.authService.logout();
  }
}
