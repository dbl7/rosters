import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { List } from '@app/list/models/list.model';
import { ListService } from '@app/list/list.service';

@Component({
  selector: 'rs-phrase-form-page',
  templateUrl: './phrase-form-page.component.html',
  styleUrls: ['./phrase-form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhraseFormPageComponent implements OnInit {
  public phraseForm: FormGroup;
  public lists$: Observable<List[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private listService: ListService,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.lists$ = this.listService.getLists$();
    this.initPhraseForm();
  }

  public addPhrase(): void {
    const { list, phrase } = this.phraseForm.value;

    this.listService.addPhrase(list, phrase).then(() => {
      this.router.navigate(['lists', list]);
    });
  }

  private initPhraseForm(): void {
    this.phraseForm = this.formBuilder.group({
      list: [this.activatedRoute.snapshot.params.id],
      phrase: [null, Validators.required],
    });
  }
}
