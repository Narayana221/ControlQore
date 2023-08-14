import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepttHomeComponent } from './deptt-home.component';

describe('DepttHomeComponent', () => {
  let component: DepttHomeComponent;
  let fixture: ComponentFixture<DepttHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepttHomeComponent]
    });
    fixture = TestBed.createComponent(DepttHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
