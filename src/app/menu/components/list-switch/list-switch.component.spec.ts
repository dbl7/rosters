import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwitchComponent } from './list-switch.component';

const lists = [
  { id: '1', name: 'List 1', items: [], isActive: false },
  { id: '2', name: 'List 2', items: [], isActive: true },
  { id: '3', name: 'List 3', items: [], isActive: false },
];

describe('ListSwitchComponent', () => {
  let component: ListSwitchComponent;
  let fixture: ComponentFixture<ListSwitchComponent>;
  let listElements: HTMLElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListSwitchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwitchComponent);
    component = fixture.componentInstance;
    component.lists = lists;
    fixture.detectChanges();
    listElements = fixture.debugElement.nativeElement.querySelectorAll('.list');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should show list's names`, () => {
    const names = [...listElements].map(({ innerHTML }) => innerHTML.trim());
    expect(names).toEqual(['List 1', 'List 2', 'List 3']);
  });

  it('should highlight the active list', () => {
    expect(listElements[1].classList.contains('active')).toBeTrue();
  });

  it('should have the ability to switch a list', () => {
    let id: string;
    component.switch.subscribe((list) => (id = list.id));
    listElements[2].click();

    expect(id).toBe('3');
  });
});
