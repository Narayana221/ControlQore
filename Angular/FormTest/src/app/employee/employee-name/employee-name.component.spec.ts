import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNameComponent } from './employee-name.component';

describe('EmployeeNameComponent', () => {
  let component: EmployeeNameComponent;
  let fixture: ComponentFixture<EmployeeNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeNameComponent]
    });
    fixture = TestBed.createComponent(EmployeeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
