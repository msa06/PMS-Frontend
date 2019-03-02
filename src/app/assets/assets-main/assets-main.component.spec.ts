import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsMainComponent } from './assets-main.component';

describe('AssetsMainComponent', () => {
  let component: AssetsMainComponent;
  let fixture: ComponentFixture<AssetsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
