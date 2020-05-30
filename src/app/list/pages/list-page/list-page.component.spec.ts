import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ListPageComponent } from './list-page.component';
import { ListService } from '@app/list/list.service';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ListService, useValue: { getList$: () => of({}) } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
