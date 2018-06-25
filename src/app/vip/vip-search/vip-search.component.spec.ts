import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipSearchComponent } from './vip-search.component';

describe('VipSearchComponent', () => {
  let component: VipSearchComponent;
  let fixture: ComponentFixture<VipSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipSearchComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
