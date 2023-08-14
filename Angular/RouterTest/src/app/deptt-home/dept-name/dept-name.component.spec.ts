import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptNameComponent } from './dept-name.component';

describe('DeptNameComponent', () => {
  let component: DeptNameComponent;
  let fixture: ComponentFixture<DeptNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptNameComponent]
    });
    fixture = TestBed.createComponent(DeptNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
