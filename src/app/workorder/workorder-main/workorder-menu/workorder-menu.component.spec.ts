import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderMenuComponent } from './workorder-menu.component';

describe('WorkorderMenuComponent', () => {
  let component: WorkorderMenuComponent;
  let fixture: ComponentFixture<WorkorderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
