import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenHomeComponent } from './ven-home.component';

describe('VenHomeComponent', () => {
  let component: VenHomeComponent;
  let fixture: ComponentFixture<VenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenHomeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
