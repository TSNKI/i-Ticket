import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipProfileComponent } from './vip-profile.component';

describe('VipProfileComponent', () => {
  let component: VipProfileComponent;
  let fixture: ComponentFixture<VipProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipProfileComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
