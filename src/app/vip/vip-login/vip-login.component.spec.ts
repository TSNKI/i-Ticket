import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipLoginComponent } from './vip-login.component';

describe('VipLoginComponent', () => {
  let component: VipLoginComponent;
  let fixture: ComponentFixture<VipLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipLoginComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
