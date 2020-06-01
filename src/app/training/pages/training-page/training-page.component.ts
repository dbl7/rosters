import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrainingService } from '../../training.service';

@Component({
  selector: 'rs-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPageComponent implements OnInit {
  public phrases$: Observable<string[]>;

  constructor(private trainingService: TrainingService) {}

  public ngOnInit(): void {
    this.phrases$ = this.trainingService
      .getCurrentList()
      .pipe(map((phrases) => phrases.map((phrase) => phrase.text)));
  }
}
