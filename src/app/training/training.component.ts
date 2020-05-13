import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '@app/auth/auth.service';
import { ListItem } from '../list/models/list.model';
import { TrainingService } from './training.service';

@Component({
  selector: 'rs-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingComponent implements OnInit {
  public phrases$: Observable<ListItem[]>;

  constructor(private trainingService: TrainingService, private authService: AuthService) {}

  public ngOnInit(): void {
    this.phrases$ = this.trainingService.getCurrentList();
  }

  public logout(): void {
    this.authService.logout();
  }
}
