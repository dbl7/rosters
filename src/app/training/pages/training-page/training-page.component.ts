import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { ListItem } from '@app/list/models/list.model';
import { AuthService } from '@app/auth/auth.service';
import { TrainingService } from '../../training.service';

@Component({
  selector: 'rs-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPageComponent implements OnInit {
  public phrases$: Observable<ListItem[]>;

  constructor(private trainingService: TrainingService, private authService: AuthService) {}

  public ngOnInit(): void {
    this.phrases$ = this.trainingService.getCurrentList();
  }

  public logout(): void {
    this.authService.logout();
  }
}
