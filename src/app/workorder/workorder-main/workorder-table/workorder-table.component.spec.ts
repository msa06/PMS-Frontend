import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderTableComponent } from './workorder-table.component';

describe('WorkorderTableComponent', () => {
  let component: WorkorderTableComponent;
  let fixture: ComponentFixture<WorkorderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
