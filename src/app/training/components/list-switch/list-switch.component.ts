import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { List } from '@app/list/models/list.model';

@Component({
  selector: 'rs-list-switch',
  templateUrl: './list-switch.component.html',
  styleUrls: ['./list-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSwitchComponent {
  @Input() public lists: List[];
  @Output() public switch: EventEmitter<List> = new EventEmitter();

  public switchList(list: List): void {
    this.switch.emit(list);
  }
}
