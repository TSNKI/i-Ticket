import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipOrdersComponent } from './vip-orders.component';

describe('VipOrdersComponent', () => {
  let component: VipOrdersComponent;
  let fixture: ComponentFixture<VipOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipOrdersComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
