import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFullDetailsComponent } from './employee-full-details.component';

describe('EmployeeFullDetailsComponent', () => {
  let component: EmployeeFullDetailsComponent;
  let fixture: ComponentFixture<EmployeeFullDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFullDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
