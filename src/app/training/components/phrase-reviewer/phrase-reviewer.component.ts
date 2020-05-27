import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rs-phrase-reviewer',
  templateUrl: './phrase-reviewer.component.html',
  styleUrls: ['./phrase-reviewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhraseReviewerComponent implements OnChanges {
  @Input() public phrases: string[];

  public phrase: string;
  private current: number;

  public ngOnChanges({ phrases }: SimpleChanges): void {
    if (phrases.currentValue) {
      this.shufflePhrases();
      this.resetPhrases();
    }
  }

  public prevPhrase(): void {
    this.current = (this.current === 0 ? this.phrases.length : this.current) - 1;
    this.phrase = this.phrases[this.current];
  }

  public nextPhrase(): void {
    this.current = (this.current === this.phrases.length - 1 ? -1 : this.current) + 1;
    this.phrase = this.phrases[this.current];
  }

  private resetPhrases(): void {
    this.phrase = this.phrases[(this.current = 0)];
  }

  private shufflePhrases(): void {
    let length = this.phrases.length;

    while (length) {
      const index = Math.floor(Math.random() * length--);
      [this.phrases[index], this.phrases[length]] = [this.phrases[length], this.phrases[index]];
    }
  }
}
