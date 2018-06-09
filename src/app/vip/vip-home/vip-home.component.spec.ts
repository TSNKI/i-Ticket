import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VipHomeComponent} from './vip-home.component';

describe('VipHomeComponent', () => {
  let component: VipHomeComponent;
  let fixture: ComponentFixture<VipHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VipHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
