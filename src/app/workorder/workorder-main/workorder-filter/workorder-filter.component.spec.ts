import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderFilterComponent } from './workorder-filter.component';

describe('WorkorderFilterComponent', () => {
  let component: WorkorderFilterComponent;
  let fixture: ComponentFixture<WorkorderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
