import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

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

  constructor(private trainingService: TrainingService) {}

  public ngOnInit(): void {
    this.phrases$ = this.trainingService.getCurrentList();
  }
}
