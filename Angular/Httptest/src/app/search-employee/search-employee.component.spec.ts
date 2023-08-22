import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeComponent } from './search-employee.component';

describe('SearchEmployeeComponent', () => {
  let component: SearchEmployeeComponent;
  let fixture: ComponentFixture<SearchEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEmployeeComponent]
    });
    fixture = TestBed.createComponent(SearchEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
