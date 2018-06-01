import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VenNavbarComponent} from './ven-navbar.component';

describe('VenNavbarComponent', () => {
  let component: VenNavbarComponent;
  let fixture: ComponentFixture<VenNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VenNavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
