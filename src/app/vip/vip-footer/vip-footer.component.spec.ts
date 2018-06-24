import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipFooterComponent } from './vip-footer.component';

describe('VipFooterComponent', () => {
  let component: VipFooterComponent;
  let fixture: ComponentFixture<VipFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipFooterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
