import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {VipConcertComponent} from './vip-concert.component';

describe('VipConcertComponent', () => {
  let component: VipConcertComponent;
  let fixture: ComponentFixture<VipConcertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VipConcertComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
