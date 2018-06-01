import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MgrNavbarComponent} from './mgr-navbar.component';

describe('MgrNavbarComponent', () => {
  let component: MgrNavbarComponent;
  let fixture: ComponentFixture<MgrNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MgrNavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
