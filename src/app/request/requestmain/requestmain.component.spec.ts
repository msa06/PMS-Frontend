import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmainComponent } from './requestmain.component';

describe('RequestmainComponent', () => {
  let component: RequestmainComponent;
  let fixture: ComponentFixture<RequestmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
