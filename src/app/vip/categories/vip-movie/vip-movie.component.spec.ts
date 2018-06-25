import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipMovieComponent } from './vip-movie.component';

describe('VipMovieComponent', () => {
  let component: VipMovieComponent;
  let fixture: ComponentFixture<VipMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipMovieComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
