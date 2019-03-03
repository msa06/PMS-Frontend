import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMPMComponent } from './ampm.component';

describe('AMPMComponent', () => {
  let component: AMPMComponent;
  let fixture: ComponentFixture<AMPMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMPMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
