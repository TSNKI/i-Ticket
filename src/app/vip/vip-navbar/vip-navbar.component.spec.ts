import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipNavbarComponent } from './vip-navbar.component';

describe('VipNavbarComponent', () => {
  let component: VipNavbarComponent;
  let fixture: ComponentFixture<VipNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipNavbarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
