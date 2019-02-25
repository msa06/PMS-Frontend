import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderMainComponent } from './workorder-main.component';

describe('WorkorderMainComponent', () => {
  let component: WorkorderMainComponent;
  let fixture: ComponentFixture<WorkorderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
