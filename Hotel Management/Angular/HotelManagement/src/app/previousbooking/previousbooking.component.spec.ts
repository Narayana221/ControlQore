import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousbookingComponent } from './previousbooking.component';

describe('PreviousbookingComponent', () => {
  let component: PreviousbookingComponent;
  let fixture: ComponentFixture<PreviousbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousbookingComponent]
    });
    fixture = TestBed.createComponent(PreviousbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
