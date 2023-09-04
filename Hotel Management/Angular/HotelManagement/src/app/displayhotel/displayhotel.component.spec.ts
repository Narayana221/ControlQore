import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhotelComponent } from './displayhotel.component';

describe('DisplayhotelComponent', () => {
  let component: DisplayhotelComponent;
  let fixture: ComponentFixture<DisplayhotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayhotelComponent]
    });
    fixture = TestBed.createComponent(DisplayhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
