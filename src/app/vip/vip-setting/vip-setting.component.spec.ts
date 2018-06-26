import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipSettingComponent } from './vip-setting.component';

describe('VipSettingComponent', () => {
  let component: VipSettingComponent;
  let fixture: ComponentFixture<VipSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipSettingComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
