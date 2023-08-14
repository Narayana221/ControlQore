import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptDetailsComponent } from './dept-details.component';

describe('DeptDetailsComponent', () => {
  let component: DeptDetailsComponent;
  let fixture: ComponentFixture<DeptDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptDetailsComponent]
    });
    fixture = TestBed.createComponent(DeptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
