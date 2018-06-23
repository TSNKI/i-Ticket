import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipHeadbarComponent } from './vip-headbar.component';

describe('VipHeadbarComponent', () => {
  let component: VipHeadbarComponent;
  let fixture: ComponentFixture<VipHeadbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipHeadbarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipHeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
