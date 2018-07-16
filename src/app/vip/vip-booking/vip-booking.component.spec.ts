import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipBookingComponent } from './vip-booking.component';

describe('VipBookingComponent', () => {
  let component: VipBookingComponent;
  let fixture: ComponentFixture<VipBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipBookingComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
